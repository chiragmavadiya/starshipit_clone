import { useRef } from 'react'
import { Carousel } from 'antd'
import BrandLogo from './BrandLogo.jsx'
import Star8Icon from '../assets/icons/Star8Icon.jsx'
import TestimonialCheckIcon from '../assets/icons/TestimonialCheckIcon.jsx'
import styles from './SignupInfoPanel.module.css'

const FEATURES = [
  '30-day free trial',
  'No credit card required',
  '5-star support',
  'Free onboarding',
]

const TESTIMONIALS = [
  'Mountain Culture saves 6-10 hours per week on packing and logistics',
  'Toyworld sees online orders reach customers 3 days faster',
  'Professional Beauty Solution saves 50% on handling time',
]

/** Slide 1 — Showpo, ZORAIDA, LSKD, culture Kings */
function LogosSlideA() {
  return (
    <>
      <span className={styles.logoShowpo}>Showpo.</span>
      <span className={styles.logoZoraida}>
        ZORAIDA
        <span className={styles.zoraidaSub}>LONDON</span>
      </span>
      <span className={styles.logoLskd}>LSKD</span>
      <span className={styles.logoCulture}>
        <span className={styles.cultureCwrap}>
          <span className={styles.crown} aria-hidden>
            ♔
          </span>
          c
        </span>
        ulture Kings
      </span>
    </>
  )
}

/** Slide 2 — alternate retailer set */
function LogosSlideB() {
  return (
    <>
      <span className={styles.logoTextBlue}>HELLOMOLLY</span>
      <span className={styles.logoTextBlue}>hismile</span>
      <span className={styles.logoTextBlueWide}>PRINCESS POLLY</span>
      <span className={styles.logoTextBlueWide}>QUIKSILVER</span>
    </>
  )
}

/** Slide 3 — another set */
function LogosSlideC() {
  return (
    <>
      <span className={styles.logoTextBlue}>Coast</span>
      <span className={styles.logoTextBlue}>HealthPost</span>
      <span className={styles.logoZoraida}>
        ZORAIDA
        <span className={styles.zoraidaSub}>LONDON</span>
      </span>
      <span className={styles.logoShowpo}>Showpo.</span>
    </>
  )
}

const SLIDES = [
  { key: 'a', Content: LogosSlideA },
  { key: 'b', Content: LogosSlideB },
  { key: 'c', Content: LogosSlideC },
]

function LogoCarousel() {
  const carouselRef = useRef(null)

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Retailer logos"
    >
      <button
        type="button"
        className={styles.arrow}
        onClick={() => carouselRef.current?.prev()}
        aria-label="Previous logos"
      >
        ‹
      </button>
      <div className={styles.carouselWrap}>
        <Carousel
          ref={carouselRef}
          dots={false}
          arrows={false}
          infinite
          speed={450}
          draggable
          autoplay
          className={styles.antCarousel}
        >
          {SLIDES.map(({ key, Content }) => (
            <div key={key}>
              <div className={styles.slideInner}>
                <Content />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => carouselRef.current?.next()}
        aria-label="Next logos"
      >
        ›
      </button>
    </div>
  )
}

export default function SignupInfoPanel() {
  return (
    <div className={styles.panel}>
      <header className={styles.header}>
        <BrandLogo size="lg" className={styles.brand} />
        <p className={styles.headline}>Award-winning shipping automation platform</p>
      </header>

      <div className={styles.featureRow}>
        {FEATURES.map((t, i) => (
          <span key={t} className={styles.featureChunk}>
            {i > 0 && <Star8Icon className={styles.featureStar} />}
            <span className={styles.featureText}>{t}</span>
          </span>
        ))}
      </div>

      <ul className={styles.list}>
        {TESTIMONIALS.map((t) => (
          <li key={t} className={styles.listItem}>
            <TestimonialCheckIcon className={styles.check} />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <p className={styles.proofTitle}>
          Join over 30,000 retailers using Starshipit to save time on every order
        </p>
        <LogoCarousel />
      </footer>
    </div>
  )
}
