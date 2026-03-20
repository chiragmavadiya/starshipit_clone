import { Checkbox, Form, Select } from 'antd'
import { HEAR_ABOUT_OPTIONS, MAIN_PROBLEM_OPTIONS } from '../../../helpers/signupOptions.js'
import { ROUTES } from '../../../configuration/routes.js'
import { Link } from 'react-router-dom'

export default function SignUpStep3() {
  return (
    <>
      <Form.Item label="How did you hear about us? (optional)" name="hearAboutUs" preserve>
        <Select size="large" placeholder="Please select" allowClear options={HEAR_ABOUT_OPTIONS} />
      </Form.Item>

      <Form.Item
        label="What is the main problem you are looking to overcome with Starshipit?"
        name="mainProblem"
        preserve
        rules={[
          { required: true, message: 'Select at least one option' },
          { type: 'array', min: 1, message: 'Select at least one option' },
        ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Please select"
          options={MAIN_PROBLEM_OPTIONS}
          maxTagCount="responsive"
        />
      </Form.Item>

      <Form.Item
        name="agreeTerms"
        valuePropName="checked"
        preserve
        rules={[
          {
            validator(_, v) {
              return v ? Promise.resolve() : Promise.reject(new Error('Please accept the terms of service'))
            },
          },
        ]}
      >
        <Checkbox>
          I have read and I agree to the{' '}
          <Link to="#" onClick={(e) => e.preventDefault()}>
            Terms of service
          </Link>
        </Checkbox>
      </Form.Item>

      <Form.Item name="agreeSms" valuePropName="checked" preserve>
        <Checkbox>
          Yes, I agree to receive SMS updates related to my trial and onboarding experience.
        </Checkbox>
      </Form.Item>
    </>
  )
}
