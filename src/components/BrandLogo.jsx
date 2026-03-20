import styles from './BrandLogo.module.css'

/**
 * @param {{ className?: string; size?: 'md' | 'lg' }} props
 */
export default function BrandLogo({ className = '', size = 'md' }) {
  return (
    <span className={`${styles.logo} ${styles[size]} ${className}`.trim()}>Starshipit</span>
  )
}
