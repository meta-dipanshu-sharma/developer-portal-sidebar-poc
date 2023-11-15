import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {jsonData} from '../constant';

function ReactPro() {

    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#ffffff',
                color: '#607489',
            },
            menu: {
                menuContent: '#fbfcfd',
                icon: '#0098e5',
                hover: {
                    backgroundColor: '#c5e4ff',
                    color: '#44596e',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        }
    };

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const menuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes['light'].menu.icon,
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({level}) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes['light'].menu.menuContent, false && !false ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            '&:hover': {
                backgroundColor: hexToRgba(themes['light'].menu.hover.backgroundColor, false ? 0.8 : 1),
                color: themes['light'].menu.hover.color,
            },
        },
        label: ({open}) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };

    const renderChild = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu label={`${item.label}`}>{renderChild(item.children)}</SubMenu>
                );
            } else {
                return (
                    <MenuItem>{item.label}</MenuItem>
                )
            }
        })
    };

    return (
        <Sidebar>
            <Menu menuItemStyles={menuItemStyles}>
                {jsonData.map(item => {
                    if (item.children) {
                        return (
                            <SubMenu label={`${item.label}`}>{renderChild(item.children)}</SubMenu>
                        );
                    } else {
                        return (
                            <MenuItem>{item.label}</MenuItem>
                        )
                    }
                })}
            </Menu>
        </Sidebar>
    )
}

export default ReactPro;