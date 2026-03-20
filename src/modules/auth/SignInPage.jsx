import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message } from 'antd'
import BrandLogo from '../../components/BrandLogo.jsx'
import FormDivider from '../../components/FormDivider.jsx'
import SocialCircleButtons from '../../components/SocialCircleButtons.jsx'
import CopyrightFooter from '../../layouts/CopyrightFooter.jsx'
import { ROUTES } from '../../configuration/routes.js'
import { isAuthenticated, signIn } from './authService.js'
import styles from './SignInPage.module.css'

export default function SignInPage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const rawFrom = location.state?.from?.pathname
  const from =
    typeof rawFrom === 'string' && rawFrom.startsWith('/') && !rawFrom.startsWith('//')
      ? rawFrom
      : ROUTES.dashboard

  if (isAuthenticated()) {
    return <Navigate to={from} replace />
  }

  const onFinish = async (values) => {
    try {
      await signIn(values)
      message.success('Signed in (demo)')
      navigate(from, { replace: true })
    } catch {
      message.error('Something went wrong')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <BrandLogo className={styles.logoCenter} />

          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter your username or email' }]}
            >
              <Input size="large" placeholder="Enter your username or email address" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <div className={styles.optionsRow}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="#" className={styles.forgot}>
                Forgot Password?
              </Link>
            </div>

            <Button type="primary" htmlType="submit" block size="large" className={styles.loginBtn}>
              Log in
            </Button>
          </Form>

          <FormDivider label="Or continue with" />

          <SocialCircleButtons />

          <p className={styles.register}>
            Don&apos;t have an account? <Link to={ROUTES.signUp}>Register</Link>
          </p>
        </div>
      </div>

      <CopyrightFooter />
    </div>
  )
}
