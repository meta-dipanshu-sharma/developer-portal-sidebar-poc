import React from 'react';
import {Layout, Menu, theme} from 'antd';
import {jsonData} from '../constant';

const {Sider} = Layout;

const AntD = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Sider style={{background: colorBgContainer}} width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{height: '100%', textAlign: "start"}}
        items={jsonData}
      />
    </Sider>
  );
};

export default AntD;