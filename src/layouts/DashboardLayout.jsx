import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Button, Input, Space, Typography } from 'antd'
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
  CloseCircleFilled,
} from '@ant-design/icons'
import styles from './DashboardLayout.module.css'
import BrandLogo from '../components/BrandLogo'
import { STATUS_COUNTS } from '../modules/dashboard/mockOrders'

const { Text } = Typography;

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

const STATUS_KEYS = [
  { key: 'new', label: 'New', count: STATUS_COUNTS.new },
  { key: 'printed', label: 'Printed', count: STATUS_COUNTS.printed },
  { key: 'shipped', label: 'Shipped', count: STATUS_COUNTS.shipped },
  { key: 'archived', label: 'Archived', count: STATUS_COUNTS.archived },
]

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [statusTab, setStatusTab] = useState('new')


  return (
    <Layout className={styles.root}>
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
      <Layout className={styles.inner}>
        <Layout.Content className={styles.content}>
          <header className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <BrandLogo size="md" className={styles.headerLogo} />
            </div>
            <nav className={styles.statusNav} aria-label="Order status">
              {STATUS_KEYS.map(({ key, label, count }) => (
                <button
                  key={key}
                  type="button"
                  className={key === statusTab ? styles.statusPillActive : styles.statusPill}
                  onClick={() => setStatusTab(key)}
                >
                  <span>{label}</span>
                  <span className={key === statusTab ? styles.countChipActive : styles.countChip}>{count}</span>
                </button>
              ))}
            </nav>
            <div className={styles.topBarRight}>
              <Input
                className={styles.headerSearch}
                placeholder="Search"
                prefix={<SearchOutlined className={styles.searchIcon} />}
                allowClear
              />
              <Space className={styles.userBlock} size={10}>
                <CloseCircleFilled className={styles.userAlert} aria-hidden />
                <Text ellipsis className={styles.userEmail}>
                  tushar@chipsairex.com
                </Text>
              </Space>
            </div>
          </header>

          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
