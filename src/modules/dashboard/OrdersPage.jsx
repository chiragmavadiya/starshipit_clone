import { useEffect, useMemo, useState } from 'react'
import {
  Button,
  Dropdown,
  Input,
  Select,
  Space,
  Table,
  Typography,
} from 'antd'
import {
  PrinterOutlined,
  EditOutlined,
  MoreOutlined,
  FilterOutlined,
  SettingOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleRightOutlined,
  CheckCircleFilled,
} from '@ant-design/icons'
import BrandLogo from '../../components/BrandLogo.jsx'
import { MOCK_ORDERS, STATUS_COUNTS } from './mockOrders.js'
import styles from './OrdersPage.module.css'

export default function OrdersPage() {
  const [pageSize, setPageSize] = useState(50)
  const [currentPage, setCurrentPage] = useState(1)

  const total = MOCK_ORDERS.length
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const rangeStart = total === 0 ? 0 : (currentPage - 1) * pageSize + 1
  const rangeEnd = Math.min(currentPage * pageSize, total)
  const atLastPage = currentPage >= pageCount || total === 0

  useEffect(() => {
    setCurrentPage(1)
  }, [pageSize])

  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return MOCK_ORDERS.slice(start, start + pageSize)
  }, [currentPage, pageSize])

  const rowMenu = useMemo(
    () => ({
      items: [
        { key: 'view', label: 'View order' },
        { key: 'duplicate', label: 'Duplicate' },
        { type: 'divider' },
        { key: 'archive', label: 'Archive', danger: true },
      ],
    }),
    [],
  )

  const importMenu = useMemo(
    () => ({
      items: [
        { key: 'csv', label: 'Import from CSV' },
        { key: 'shopify', label: 'Import from Shopify' },
      ],
    }),
    [],
  )

  const createMenu = useMemo(
    () => ({
      items: [
        { key: 'manual', label: 'Create manual order' },
        { key: 'draft', label: 'New draft' },
      ],
    }),
    [],
  )

  const columns = [
    {
      title: 'ORDER #',
      dataIndex: 'orderNo',
      key: 'orderNo',
      width: 140,
      render: (no) => (
        <Space size={8} className={styles.orderNoCell}>
          <Button type="text" size="small" icon={<EditOutlined />} className={styles.iconBtn} aria-label="Edit" />
          <span className={styles.orderDot} aria-hidden />
          <a href={`#order-${no}`} className={styles.orderLink}>
            {no}
          </a>
        </Space>
      ),
    },
    {
      title: (
        <span>
          ORDER DATE <span className={styles.sortHint}>↓</span>
        </span>
      ),
      dataIndex: 'orderDate',
      key: 'orderDate',
      width: 160,
    },
    {
      title: 'CUSTOMER',
      dataIndex: 'customer',
      key: 'customer',
      ellipsis: true,
      render: (name) => (
        <Space size={8}>
          <CheckCircleFilled className={styles.customerOk} />
          <span>{name}</span>
        </Space>
      ),
    },
    {
      title: 'ITEM(S)',
      dataIndex: 'items',
      key: 'items',
      width: 100,
    },
    {
      title: 'COUNTRY',
      dataIndex: 'country',
      key: 'country',
      width: 110,
    },
    {
      title: 'CARRIER & PRODUCT',
      key: 'carrier',
      ellipsis: true,
      render: (_, row) => (
        <Space size={10} className={styles.carrierCell}>
          <span className={styles.carrierMark} aria-hidden>
            {row.carrierCode}
          </span>
          <span>{row.carrierLabel}</span>
        </Space>
      ),
    },
    {
      title: (
        <div className={styles.gearHead}>
          <Button type="text" icon={<SettingOutlined />} className={styles.gearBtn} aria-label="Table settings" />
        </div>
      ),
      key: 'actions',
      width: 148,
      align: 'right',
      render: () => (
        <Space size={8}>
          <Button type="primary" icon={<PrinterOutlined />} className={styles.printBtn}>
            PRINT
          </Button>
          <Dropdown menu={rowMenu} trigger={['click']}>
            <Button type="default" icon={<MoreOutlined />} className={styles.moreBtn} aria-label="More" />
          </Dropdown>
        </Space>
      ),
    },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <Space size={12} wrap className={styles.toolbarLeft}>
          <Select
            defaultValue="default"
            className={styles.selectView}
            options={[
              { value: 'default', label: 'Select view' },
              { value: 'all', label: 'All columns' },
            ]}
          />
          <Input
            className={styles.filterInput}
            placeholder="Filter orders"
            prefix={<FilterOutlined className={styles.filterIcon} />}
            allowClear
          />
        </Space>
        <Space size={16} wrap className={styles.toolbarRight}>
          <Button type="link" className={styles.toolbarLink}>
            CHECK ADDRESSES
          </Button>
          <Button type="link" className={styles.toolbarLink}>
            SUGGESTED MERGES
          </Button>
          <Dropdown menu={importMenu} trigger={['click']}>
            <Button className={styles.outlineBtn}>
              Import orders <span className={styles.chev}>▾</span>
            </Button>
          </Dropdown>
          <Dropdown menu={createMenu} trigger={['click']}>
            <Button className={styles.outlineBtn}>
              Create order <span className={styles.chev}>▾</span>
            </Button>
          </Dropdown>
        </Space>
      </div>

      <div className={styles.tableCard}>
        <Table
          className={styles.ordersTable}
          rowSelection={{ type: 'checkbox' }}
          columns={columns}
          dataSource={pagedData}
          pagination={false}
          scroll={{ x: 1100 }}
          size="middle"
        />
        <footer className={styles.tableFooter}>
          <Space size={4} className={styles.pager}>
            <Button
              type="text"
              icon={<DoubleLeftOutlined />}
              disabled={currentPage <= 1}
              className={styles.pageIconBtn}
              aria-label="First page"
              onClick={() => setCurrentPage(1)}
            />
            <Button
              type="text"
              icon={<LeftOutlined />}
              disabled={currentPage <= 1}
              className={styles.pageIconBtn}
              aria-label="Previous page"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            />
            <span className={styles.pageNumActive}>{currentPage}</span>
            <Button
              type="text"
              icon={<RightOutlined />}
              disabled={atLastPage}
              className={styles.pageIconBtn}
              aria-label="Next page"
              onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
            />
            <Button
              type="text"
              icon={<DoubleRightOutlined />}
              disabled={atLastPage}
              className={styles.pageIconBtn}
              aria-label="Last page"
              onClick={() => setCurrentPage(pageCount)}
            />
          </Space>
          <Space className={styles.pageSizeBlock}>
            <span className={styles.pageSizeLabel}>Page size:</span>
            <Select
              value={pageSize}
              onChange={setPageSize}
              options={[
                { value: 25, label: '25' },
                { value: 50, label: '50' },
                { value: 100, label: '100' },
              ]}
              className={styles.pageSizeSelect}
            />
          </Space>
          <span className={styles.rangeText}>
            {rangeStart} - {rangeEnd} of {total} items
          </span>
        </footer>
      </div>
    </div>
  )
}
