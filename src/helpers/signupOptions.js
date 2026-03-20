/** Select / multi-select options for signup steps 2–3 */

export const MONTHLY_VOLUME_OPTIONS = [
  { value: 'not_live', label: 'My business is not live yet' },
  { value: '0_100', label: '0 - 100 labels/month' },
  { value: '101_500', label: '101-500 labels/month' },
  { value: '501_2000', label: '501-2,000 labels/month' },
  { value: '2001_10000', label: '2,001-10,000 labels/month' },
  { value: '10001_50000', label: '10,001-50,000 labels/month' },
  { value: '50000_plus', label: '50,000+ labels/month' },
]

export const COURIER_OPTIONS = [
  { value: 'no_courier', label: 'I do not have a courier yet' },
  { value: 'dhl_eco_ap', label: 'DHL eCommerce Asia Pacific' },
  { value: 'dhl_express', label: 'DHL Express' },
  { value: 'fedex', label: 'FedEx' },
  { value: 'globale', label: 'Global-e' },
  { value: 'parcl', label: 'Parcl' },
  { value: 'plain_label', label: 'Plain Label' },
  { value: 'quantum', label: 'Quantum Solutions' },
  { value: 'seko', label: 'Seko' },
]

export const PLATFORM_OPTIONS = [
  {
    label: 'General',
    options: [{ value: 'no_platform', label: 'I do not have a platform yet' }],
  },
  {
    label: 'ECOMMERCE',
    options: [
      { value: 'amazon', label: 'Amazon' },
      { value: 'bigcommerce', label: 'BigCommerce' },
      { value: 'catch', label: 'Catch.com.au' },
      { value: 'ebay', label: 'eBay' },
      { value: 'ecwid', label: 'Ecwid' },
      { value: 'estar', label: 'eStar' },
      { value: 'etsy', label: 'Etsy' },
    ],
  },
]

export const HEAR_ABOUT_OPTIONS = [
  { value: 'email_branding', label: 'Email notification with Starshipit branding' },
  { value: 'event', label: 'Event' },
  { value: 'google', label: 'Google' },
  { value: 'webinar', label: 'Webinar' },
  { value: 'social_ads', label: 'Social media ads' },
  { value: 'ref_customer', label: 'I was referred by a customer' },
  { value: 'ref_platform', label: 'I was referred by a platform or courier' },
  { value: 'ref_agency', label: 'I was referred by an agency or consultant' },
  { value: 'other', label: 'Other' },
]

export const MAIN_PROBLEM_OPTIONS = [
  { value: 'automate', label: 'Automate repetitive shipping tasks and save time' },
  { value: 'checkout_rates', label: 'Provide customers with shipping choices and rates at checkout' },
  { value: 'reduce_cost', label: 'Reduce shipping costs and/or find new provider' },
  { value: 'streamline', label: 'Streamlining processes and tech stack' },
  { value: 'returns', label: 'Simplify and manage returns' },
  { value: 'other', label: 'Other' },
]

/** Ant Design field names per step (for validateFields) */
export const STEP1_FIELD_NAMES = [
  'firstName',
  'lastName',
  'email',
  'country',
  'phone',
  'password',
  'confirmPassword',
  'robotAck',
]

export const STEP2_FIELD_NAMES = ['monthlyVolume', 'couriers', 'platforms']

export const STEP3_FIELD_NAMES = ['mainProblem', 'agreeTerms']
