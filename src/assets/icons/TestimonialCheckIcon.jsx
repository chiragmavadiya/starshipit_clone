/** Light gray checkmark for testimonial list (matches Starshipit sidebar) */
export default function TestimonialCheckIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="#c5cad3" strokeWidth="1.25" fill="none" />
      <path
        d="M8 12l2.2 2.2L15.5 9"
        stroke="#b0b6c0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
