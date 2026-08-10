import type { Dict } from './index'

/**
 * English dictionary.
 *
 * The shape is defined by `uz.ts`; typing this as `Dict` makes `tsc` catch any
 * missing or extra key. Array lengths are NOT checked by the type — several of
 * them are indexed by the mock data, so keep the counts and the order exactly
 * as in `uz.ts`.
 */
export const en: Dict = {
  // ── landing: navigation and hero ──────────────────────────────────────
  navHow: 'How it works',
  navCats: 'Categories',
  navPilot: 'Pilot',
  login: 'Sign in',
  heroOverline: 'HR Tech for Uzbekistan',
  heroTitle: 'Connect your company to uCare and automate the benefits package',
  heroSub:
    'Retain employees without growing payroll: the budget stays the same, while the value becomes personal for everyone.',
  heroCta: 'Start a free pilot',
  heroCta2: 'See the HR dashboard',
  heroCardLabel: 'Employee app',
  heroCardOf: 'of 1 500 000 · renews on September 1',
  active: 'Active',

  // ── landing: sections ─────────────────────────────────────────────────
  trustOverline: 'Market research',
  voicesTitle: 'Voices from the market',
  voicesSub: 'Quotes from interviews with employers in Tashkent.',
  diffTitle: 'This is not a discount app',
  diffSub:
    'A cashback service does not know where a person works or how long they have been there. In uCare the employer controls the access rules.',
  diffColA: 'A typical cashback service',
  problemTitle: 'Why the benefits package does not work',
  problemSub: 'The benefits exist, but they are buried in spreadsheets and employees never notice them.',
  howTitle: 'Works in three steps',
  catsTitle: 'Partner categories',
  catsSub:
    'The partner network is built by category, and the categories themselves unlock according to company rules.',
  screensTitle: 'Dashboard screens',
  screensSub: 'HR works across three screens: rules, limits and results.',
  objTitle: 'Why not just pay a bonus?',
  objSub:
    'A bonus is forgotten quickly, both as money and as a gesture — a benefit reminds people of itself every week.',
  partnersOverline: 'For partners',
  partnersLandTitle: 'Reach a closed audience at no risk',
  partnersLandSub: 'You only pay for a completed transaction — onboarding is free.',
  becomePartner: 'Become a partner',
  offerOverline: 'Offer',
  offerTitle: 'A free three-month pilot',
  offerSub:
    'Up to 60 employees, the full feature set, no onboarding fee. At the end of the pilot you get a report on reach and utilisation.',
  applyCta: 'Request a pilot',
  formTitle: 'Apply for a free pilot',
  formSub:
    'The pilot runs for three months and commits you to nothing. We will get in touch within one business day.',
  fName: 'Full name',
  fCompany: 'Company',
  fSize: 'Number of employees',
  fContact: 'Contact: phone or email',
  fNameHint: 'required',
  footer: 'uCare — a corporate benefits platform for companies in Uzbekistan',
  footerNote:
    'The pilot runs for three months with no onboarding fee. At the end we hand over a report on reach and utilisation.',
  footerProduct: 'Product',
  footerContacts: 'Contacts',
  footerCity: 'Tashkent',

  // ── dashboard shell ───────────────────────────────────────────────────
  cabinet: 'HR dashboard',
  company: 'Company',
  companySub: '60 employees · Tashkent',
  logout: 'Sign out',
  employeeApp: 'Employee app',

  // ── dashboard ─────────────────────────────────────────────────────────
  usageTitle: 'Spending by category',
  periodAugust: 'August 2026',
  usageTotal: 'Total for the month',
  feedTitle: 'Recent transactions',
  feedSub: 'Today',
  limitStateTitle: 'Limit status',
  rulesCardTitle: 'Access rules',
  rulesCardSub: 'active rules',
  openRules: 'Go to rules',
  openLimits: 'Go to limits',

  // ── table columns ─────────────────────────────────────────────────────
  colEmployee: 'Employee',
  colPartner: 'Partner',
  colAmount: 'Amount',
  colTime: 'Time',
  colDept: 'Department',
  colGrade: 'Grade',
  colTenure: 'Tenure',
  colAccess: 'Unlocked',
  colStatus: 'Status',
  colLimit: 'Limit',
  colSpent: 'Spent',
  colLeft: 'Remaining',
  colProgress: 'Usage',
  colCategory: 'Category',

  // ── access rules ──────────────────────────────────────────────────────
  rulesTitle: 'Access rules',
  rulesSub:
    'A benefit unlocks on three conditions: department, grade and tenure. Tenure is the one a cashback app cannot replicate.',
  ladderTitle: 'Unlocking by tenure',
  ladderNote:
    'A category unlocks based on time at the company — that is exactly why the package retains people.',
  tick3: '3 mo',
  tick6: '6 mo',
  tick12: '1 yr',
  tick24: '2 yrs',
  hireDay: 'Hire date',
  newRule: 'New rule',
  addRule: 'Add rule',
  fieldDept: 'Department',
  fieldGrade: 'Grade',
  fieldTenure: 'Tenure',
  fieldCats: 'Categories that unlock',
  cancel: 'Cancel',
  saveRule: 'Save rule',
  matrixTitle: 'Categories and access levels',
  ruleWord: 'Rule',
  ruleActive: 'Active',
  peopleUnit: 'employees',
  opensImmediately: 'unlocked from day one',
  opensHere: 'unlocks here',

  // ── limits ────────────────────────────────────────────────────────────
  budgetLabel: 'Company budget',
  budgetSub: 'August 2026 · 60 employees',
  month: 'Month',
  quarter: 'Quarter',
  distributed: 'Allocated',
  spent: 'Spent',
  reserve: 'Reserve',
  limitNote:
    'The limit can only be spent at partners: it cannot be cashed out or moved to a card, and whatever is left at the end of the period stays with the company.',
  groupTitle: 'Limit by group',
  groupSub: 'Set the limit once per department or grade instead of employee by employee.',
  groupBy: 'Group by',
  groupTarget: 'Group',
  groupAmount: 'Limit per employee, UZS',
  groupHint: 'Period: month. Anything left does not carry over',
  applyGroup: 'Save limits',
  limitsTableTitle: 'Employee limits',
  limitsTableSub: '8 of 54',

  // ── partners ──────────────────────────────────────────────────────────
  partnersTitle: 'Partners',
  partnersSub:
    'The discount is split between the employee and the platform — the company pays nothing on top.',
  addPartner: 'Add partner',
  discount: 'Discount',
  splitEmp: 'To employee',
  splitPlat: 'To platform',

  // ── analytics ─────────────────────────────────────────────────────────
  analyticsTitle: 'Retention analytics',
  analyticsSub: 'We track the impact of the package through turnover, reach and utilisation.',
  utilTitle: 'Utilisation by category',
  dynamicsTitle: 'Activation trend',
  horizonTitle: 'Impact is measured over 9–12 months',
  horizonBody:
    'Turnover is a slow metric. In the first three months look at reach and utilisation, and draw conclusions about turnover a year after the baseline.',
  turnoverTitle: 'Turnover by department',
  turnoverSub: 'Baseline — 18.4% company-wide',

  // ── people ────────────────────────────────────────────────────────────
  peopleTitle: 'Employees',
  peopleSub: '54 connected · 6 invitations sent',
  searchPlaceholder: 'Search by name or department',
  pagerInfo: 'Showing 8 of 54',
  prev: 'Previous',
  next: 'Next',

  // ── employee app ──────────────────────────────────────────────────────
  backToCabinet: 'Back to dashboard',
  tgClose: 'Close',
  mLimitLabel: 'Remaining limit',
  mLimitSub: 'of 1 500 000 · renews on September 1',
  mCatsLabel: 'Available to you',
  mPartnerAddr: 'Chilanzar 12 · 1.2 km',
  mQrHint: 'Show the QR code at the till — the amount comes off your limit',
  mPay: 'Pay by QR',

  // ── toasts ────────────────────────────────────────────────────────────
  toastApplication: 'Request sent',
  toastRuleSaved: 'Rule saved',
  toastLimitsSaved: 'Limits saved',

  // ── reference data ────────────────────────────────────────────────────
  cat: {
    food: 'Food',
    coffee: 'Coffee',
    fitness: 'Fitness',
    med: 'Healthcare',
    pharm: 'Pharmacies',
    edu: 'Education',
    taxi: 'Taxi',
  },
  /** Index 0 is "all departments"; the rest keep the order used by the mocks. */
  depts: ['All departments', 'Engineering', 'Sales', 'Marketing', 'Operations', 'Finance'],
  grades: ['All grades', 'Junior+', 'Middle+', 'Senior'],
  tenures: ['from day one', 'from 3 months', 'from 6 months', 'from 1 year', 'from 2 years'],
  nav: {
    dash: 'Dashboard',
    people: 'Employees',
    partners: 'Partners',
    rules: 'Access rules',
    limits: 'Limits',
    analytics: 'Analytics',
  },
  levels: [
    { label: 'Basic', range: '0–6 mo' },
    { label: 'Standard', range: '6 mo – 2 yrs' },
    { label: 'Extended', range: 'from 2 yrs' },
  ],
  groupBySelect: { dept: 'Department', grade: 'Grade' },
  statusOptions: {
    all: 'All statuses',
    ok: 'Connected',
    inv: 'Invited',
  },
  partnerStatus: { ok: 'Active', test: 'In testing', draft: 'In review' },
  peopleStatus: { ok: 'Connected', inv: 'Invited' },
  months: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],

  // ── landing content ───────────────────────────────────────────────────
  heroStats: ['free pilot', 'payroll growth', 'partner categories'],
  heroStatValues: ['3 mo', '0%', '7'],
  trust: [
    'in-depth interviews with employers',
    'turnover at the companies we studied',
    'of companies believe employees need individual choice',
  ],
  problems: [
    {
      title: 'Manual administration',
      body: 'HR tracks benefits in spreadsheets and every payment is approved separately.',
    },
    {
      title: 'The effect is never measured',
      body: 'The budget gets spent, but there are no numbers on reach or impact.',
    },
    {
      title: 'Employees have no choice',
      body: 'Everyone gets the same package, and it does not suit most of them.',
    },
  ],
  steps: [
    {
      title: 'The company configures access rules',
      body: 'Department, grade and tenure — a benefit unlocks on these three conditions.',
    },
    {
      title: 'Employees see what is open to them personally',
      body: 'The app shows only their categories and their remaining limit.',
    },
    {
      title: 'They pay a partner by QR at a discount',
      body: 'A QR code at the till, the amount comes off the limit, reporting is collected automatically.',
    },
  ],
  voices: [
    {
      quote: 'There is no single automated platform, everything is calculated by hand',
      role: 'HR director, private clinic',
    },
    {
      quote: 'Managing benefits eats up HR resources',
      role: 'People team, university',
    },
    {
      quote: 'A raise does not solve the dissatisfaction problem',
      role: 'Head of an education company',
    },
  ],
  diffA: [
    'Does not know where a person works',
    'Cannot take tenure into account',
    'Cannot unlock extended access for a third year of service',
    'The discount is the same for everyone and the employer has no say in it',
  ],
  diffB: [
    'The employer controls the access rules',
    'Access depends on department, grade and tenure',
    'Extended categories unlock with years of service',
    'Budget, limits and reporting stay with the company',
  ],
  objections: [
    {
      title: 'A bonus dissolves into the budget',
      body: 'A month later it no longer reads as the employer caring — it is just part of the salary.',
    },
    {
      title: 'A weekly benefit is remembered',
      body: 'A benefit used several times a week gets associated directly with the employer.',
    },
    {
      title: 'A discount scales purchasing power',
      body: 'A partner discount makes the same amount go further; a bonus does not.',
    },
  ],
  partnerPoints: [
    {
      title: 'You pay only for a completed transaction',
      body: 'Onboarding is free.',
    },
    {
      title: 'A closed audience',
      body: 'Employees of client companies — with a limit and ready to buy.',
    },
    {
      title: 'uCare handles acquisition',
      body: 'Employees see the partner the moment the category unlocks in the app.',
    },
  ],
  screenCaps: [
    { title: 'Access rules', body: 'Unlocking by department, grade and tenure' },
    { title: 'Limits', body: 'Budget and allocation across employees' },
    { title: 'Analytics', body: 'Reach, utilisation and trends' },
  ],

  // ── metric and analytics captions ─────────────────────────────────────
  metrics: [
    { label: 'Employees connected', sub: '+4 vs last month' },
    { label: 'Reach', sub: '+6 pp vs last month' },
    { label: 'Active this month', sub: '87% of those connected' },
    { label: 'Transactions this month', sub: 'average check 187 000 UZS' },
  ],
  analytics: [
    {
      label: 'Baseline turnover',
      delta: 'Baseline, March 2026',
      sub: 'Annual figure, recorded before the pilot',
    },
    {
      label: 'Utilisation',
      delta: '+8.2 vs last month',
      sub: 'Share of the allocated budget that was spent',
    },
    {
      label: 'Employee reach',
      delta: '54 / 60',
      sub: 'Employees who activated the app',
    },
    {
      label: 'Active this month',
      delta: '87% of those connected',
      sub: 'At least one transaction during the month',
    },
  ],

  // ── strings that are part of a data row ───────────────────────────────
  partnerPlaces: [
    '14 locations · Tashkent',
    '6 locations · Tashkent',
    '3 clubs · Chilanzar, Yunusabad',
    '2 clinics · Tashkent',
    '22 pharmacies',
    'Courses and certifications',
    'Weekdays 07:00–21:00',
    'Contract being signed',
  ],
  peopleTenures: [
    '2 yr 4 mo',
    '8 mo',
    '1 yr 2 mo',
    '3 yr 1 mo',
    '5 mo',
    '1 yr 7 mo',
    '2 mo',
    '4 mo',
  ],
  employeeNotes: {
    daily: 'Every day',
    from6: 'Unlocked from 6 months',
    from12: 'From 1 year',
    from24: 'From 2 years',
  },
  employeeTabs: ['Home', 'Catalog', 'History', 'Profile'],

  /** Decimal separator for this locale — see `formatDecimal` in mock/derive.ts. */
  decimalSeparator: '.',
}
