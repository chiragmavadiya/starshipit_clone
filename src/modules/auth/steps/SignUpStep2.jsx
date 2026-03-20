import { Alert, Form, Input, Select } from 'antd'
import {
  COURIER_OPTIONS,
  MONTHLY_VOLUME_OPTIONS,
  PLATFORM_OPTIONS,
} from '../../../helpers/signupOptions.js'
import { optionalStoreUrlRules } from '../../../helpers/signupValidation.js'
import styles from '../SignUpPage.module.css'

export default function SignUpStep2() {
  return (
    <>
      <Form.Item
        label="Monthly volume"
        name="monthlyVolume"
        preserve
        rules={[{ required: true, message: 'Select monthly volume' }]}
      >
        <Select
          size="large"
          placeholder="Select volume"
          options={MONTHLY_VOLUME_OPTIONS}
        />
      </Form.Item>

      <Form.Item
        label="Store URL (optional)"
        name="storeUrl"
        preserve
        rules={optionalStoreUrlRules}
        extra="e.g. https://mystore.com or mystore.com"
      >
        <Input size="large" placeholder="https://" />
      </Form.Item>

      <Form.Item
        label="Which couriers will you be integrating with Starshipit?"
        name="couriers"
        preserve
        rules={[
          {
            required: true,
            message: 'Select at least one option',
          },
          {
            type: 'array',
            min: 1,
            message: 'Select at least one option',
          },
        ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Select couriers"
          options={COURIER_OPTIONS}
          maxTagCount="responsive"
        />
      </Form.Item>

      <Form.Item
        label="Which platforms will you be integrating with Starshipit?"
        name="platforms"
        preserve
        rules={[
          { required: true, message: 'Select at least one option' },
          { type: 'array', min: 1, message: 'Select at least one option' },
        ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Select platforms"
          options={PLATFORM_OPTIONS}
          maxTagCount="responsive"
        />
      </Form.Item>

      <Alert
        type="info"
        showIcon={false}
        className={styles.missingAlert}
        message={
          <span className={styles.missingAlertInner}>
            Are we missing your preferred courier or platform integration?{' '}
            <a href="#contact" onClick={(e) => e.preventDefault()}>
              Let us know
            </a>
            .
          </span>
        }
      />
    </>
  )
}
