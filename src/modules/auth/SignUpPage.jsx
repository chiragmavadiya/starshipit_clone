import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row, message } from 'antd'
import SignupInfoPanel from '../../components/SignupInfoPanel.jsx'
import SignupStepper from '../../components/SignupStepper.jsx'
import { ROUTES } from '../../configuration/routes.js'
import { signUp } from './authService.js'
import SignUpStep1 from './steps/SignUpStep1.jsx'
import SignUpStep2 from './steps/SignUpStep2.jsx'
import SignUpStep3 from './steps/SignUpStep3.jsx'
import {
  STEP1_FIELD_NAMES,
  STEP2_FIELD_NAMES,
  STEP3_FIELD_NAMES,
} from '../../helpers/signupOptions.js'
import styles from './SignUpPage.module.css'

export default function SignUpPage() {
  const [form] = Form.useForm()
  const [step, setStep] = useState(0)

  const goNext = async () => {
    const fieldSets = [STEP1_FIELD_NAMES, STEP2_FIELD_NAMES, STEP3_FIELD_NAMES]
    const names = fieldSets[step]
    try {
      await form.validateFields(names)
      if (step < 2) {
        setStep((s) => s + 1)
        return
      }
      const values = form.getFieldsValue()
      await signUp(values)
      message.success('Your 30-day free trial is activated (demo)')
    } catch {
      /* validation messages shown by antd */
    }
  }

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const onGoogleClick = () => {
    message.info('Google sign-up would open here in production.')
  }

  const primaryLabel = step === 2 ? 'Activate your 30 day free trial' : 'Continue'

  return (
    <div className={`container-fluid g-0 ${styles.shell}`}>
      <Row className={styles.row} gutter={0}>
        <Col xs={24} lg={12} className={styles.infoCol}>
          <SignupInfoPanel />
        </Col>
        <Col xs={24} lg={12} className={styles.formCol}>
          <div className={styles.formWrap}>
            <h1 className={styles.title}>
              {step === 0 ? 'Sign up to Starshipit' : 'Sign up to Starshipit with Google'}
            </h1>
            <p className={styles.subtitle}>Get started with your 30-day trial in 3 easy steps!</p>

            <SignupStepper current={step} />

            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              className={styles.form}
              initialValues={{
                couriers: ['no_courier'],
                platforms: ['no_platform'],
              }}
              scrollToFirstError={{ behavior: 'smooth', block: 'center' }}
            >
              {step === 0 && <SignUpStep1 onGoogleClick={onGoogleClick} />}
              {step === 1 && <SignUpStep2 />}
              {step === 2 && <SignUpStep3 />}

              <Button
                type="primary"
                htmlType="button"
                block
                size="large"
                className={styles.continueBtn}
                onClick={goNext}
              >
                {primaryLabel}
              </Button>
            </Form>

            <p className={styles.footerLink}>
              Already have a Starshipit account? <Link to={ROUTES.signIn}>Log in</Link>
            </p>

            {step > 0 && (
              <button type="button" className={styles.goBack} onClick={goBack}>
                Go back
              </button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
