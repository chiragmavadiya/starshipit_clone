import { Outlet } from 'react-router-dom'
import {  Layout } from 'antd'
import styles from './DashboardLayout.module.css'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function DashboardLayout() {

  return (
    <Layout className={styles.root}>
      <Sidebar />
      <Layout className={styles.inner}>
        <Layout.Content className={styles.content}>
        
          <Topbar />
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
