import styles from './SignupStepper.module.css'

const LABELS = [
  'Create your account',
  'Tell us about your business',
  'Activate your account',
]

/**
 * @param {{ current: number }} props — current step index 0–2
 */
export default function SignupStepper({ current }) {
  return (
    <div className={styles.wrap} role="navigation" aria-label="Sign up progress">
      {LABELS.map((label, i) => {
        let barMod = styles.barPending
        if (i < current) barMod = styles.barDone
        if (i === current) barMod = styles.barActive

        return (
          <div key={label} className={styles.cell}>
            <div className={`${styles.bar} ${barMod}`} aria-hidden />
            <span
              className={`${styles.label} ${i === current ? styles.labelActive : ''} ${i < current ? styles.labelDone : ''}`}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
