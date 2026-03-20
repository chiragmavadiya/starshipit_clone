import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RocketOutlined,
  ShoppingOutlined,
  SearchOutlined,
  ApartmentOutlined,
  FileTextOutlined,
  CarOutlined,
  BarChartOutlined,
  LineChartOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons'

import styles from './DashboardLayout.module.css'


const menuItems = [
    { key: 'start', icon: <RocketOutlined />, label: 'Getting started' },
    { key: 'orders', icon: <ShoppingOutlined />, label: 'Orders' },
    { key: 'search', icon: <SearchOutlined />, label: 'Search' },
    { key: 'workflows', icon: <ApartmentOutlined />, label: 'Workflows' },
    { key: 'manifests', icon: <FileTextOutlined />, label: 'Manifests' },
    { key: 'pickups', icon: <CarOutlined />, label: 'Pickups' },
    { key: 'reports', icon: <BarChartOutlined />, label: 'Reports' },
    {
      key: 'analytics',
      icon: <LineChartOutlined />,
      label: 'Analytics',
      children: [{ key: 'analytics-overview', label: 'Overview' }],
    },
    { key: 'products', icon: <AppstoreOutlined />, label: 'Products' },
    { key: 'address', icon: <ContactsOutlined />, label: 'Address book' },
    { key: 'warehouse', icon: <HomeOutlined />, label: 'Warehouse' },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      children: [{ key: 'settings-general', label: 'General' }],
    },
  ]


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)


    return (
        <Layout.Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            trigger={null}
            width={252}
            collapsedWidth={72}
            className={styles.sider}
        >
            <div className={styles.siderHead}>
                <Button
                    type="text"
                    className={styles.trigger}
                    aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed((c) => !c)}
                />
            </div>
            <Menu
                mode="inline"
                selectedKeys={['orders']}
                defaultOpenKeys={['analytics', 'settings']}
                inlineCollapsed={collapsed}
                items={menuItems}
                className={styles.menu}
            />
        </Layout.Sider>
    )
}
