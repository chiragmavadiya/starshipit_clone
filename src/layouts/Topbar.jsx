import React, { useState } from 'react'
import { Button, Input, Popover, Space } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import styles from './DashboardLayout.module.css'
import BrandLogo from '../components/BrandLogo'
import { ROUTES } from '../configuration/routes.js'
import { STATUS_COUNTS } from '../modules/dashboard/mockOrders'
import { useNavigate } from 'react-router-dom'
import { clearAuthenticatedSession } from '../modules/auth/authService'

const STATUS_KEYS = [
    { key: 'new', label: 'New', count: STATUS_COUNTS.new },
    { key: 'printed', label: 'Printed', count: STATUS_COUNTS.printed },
    { key: 'shipped', label: 'Shipped', count: STATUS_COUNTS.shipped },
    { key: 'archived', label: 'Archived', count: STATUS_COUNTS.archived },
]

export default function Topbar() {
    const [statusTab, setStatusTab] = useState('new')
    const [userOpen, setUserOpen] = useState(false)
    const navigate = useNavigate()

    const displayName =
        localStorage.getItem('username') ||
        sessionStorage.getItem('username') ||
        'User'

    const handleLogout = () => {
        setUserOpen(false)
        clearAuthenticatedSession()
        navigate(ROUTES.signIn, { replace: true })
    }

    const userMenu = (
        <div className={styles.userPopover}>
            <div className={styles.userPopoverName}>{displayName}</div>
            <Button type="primary" danger block size="middle" onClick={handleLogout}>
                Log out
            </Button>
        </div>
    )

    return (
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
                <Space className={styles.userBlock} size={4}>
                    <Popover
                        content={userMenu}
                        trigger="click"
                        placement="bottomRight"
                        open={userOpen}
                        onOpenChange={setUserOpen}
                    >
                        <Button
                            type="text"
                            className={styles.userMenuTrigger}
                            aria-label="Account menu"
                            aria-expanded={userOpen}
                            icon={<UserOutlined className={styles.userMenuIcon} />}
                        />
                    </Popover>
                </Space>
            </div>
        </header>
    )
}