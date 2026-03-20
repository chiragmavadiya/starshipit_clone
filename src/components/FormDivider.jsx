import styles from './FormDivider.module.css'

/** @param {{ label: string; className?: string }} props */
export default function FormDivider({ label, className = '' }) {
  return (
    <div className={`${styles.wrap} ${className}`.trim()} role="separator">
      <span className={styles.line} />
      <span className={styles.text}>{label}</span>
      <span className={styles.line} />
    </div>
  )
}
