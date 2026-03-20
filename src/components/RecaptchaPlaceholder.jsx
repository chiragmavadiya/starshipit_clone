import styles from './RecaptchaPlaceholder.module.css'

/** Visual stand-in for reCAPTCHA (requires site keys for real widget). */
export default function RecaptchaPlaceholder() {
  return (
    <div className={styles.box} role="img" aria-label="Security check placeholder">
      <div className={styles.left}>
        <div className={styles.cb} />
        <span className={styles.label}>I&apos;m not a robot</span>
      </div>
      <div className={styles.right}>
        <span className={styles.logo}>reCAPTCHA</span>
        <span className={styles.sub}>Privacy · Terms</span>
      </div>
    </div>
  )
}
