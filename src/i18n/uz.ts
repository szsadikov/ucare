/**
 * Uzbek dictionary — the default language.
 *
 * This object is the source of the `Dict` type: every other dictionary has to
 * repeat its shape, otherwise the build fails at `tsc`. Array lengths are not
 * checked by the type though — several arrays are indexed by the mock data, so
 * keep their counts and order in sync across all languages.
 */
export const uz = {
  // ── landing: navigation and hero ──────────────────────────────────────
  navHow: 'Qanday ishlaydi',
  navCats: 'Kategoriyalar',
  navPilot: 'Pilot',
  login: 'Kirish',
  heroOverline: "O'zbekiston uchun HR Tech",
  heroTitle: "Kompaniyangizni uCare'ga ulang va ijtimoiy paketni avtomatlashtiring",
  heroSub:
    "Xodimlarni ish haqi fondini oshirmasdan saqlab qoling: byudjet o'zgarmaydi, foyda esa har bir xodim uchun shaxsiy bo'ladi.",
  heroCta: 'Bepul pilotni boshlash',
  heroCta2: "HR kabinetini ko'rish",
  heroCardLabel: 'Xodim ilovasi',
  heroCardOf: '1 500 000 dan · 1-sentabrda yangilanadi',
  active: 'Faol',

  // ── landing: sections ─────────────────────────────────────────────────
  trustOverline: 'Bozor tadqiqoti',
  voicesTitle: 'Bozor ovozlari',
  voicesSub: 'Toshkentdagi ish beruvchilar bilan intervyulardan iqtiboslar.',
  diffTitle: 'Bu chegirmalar ilovasi emas',
  diffSub:
    "Keshbek servisi odamning qayerda ishlashini va staji qanchaligini bilmaydi. uCare'da kirish qoidalarini ish beruvchi boshqaradi.",
  diffColA: 'Odatiy keshbek servisi',
  problemTitle: 'Ijtimoiy paket nega ishlamaydi',
  problemSub: 'Imtiyozlar bor, lekin ular jadvallarda yashiringan va xodim ularni sezmaydi.',
  howTitle: 'Uch qadamda ishlaydi',
  catsTitle: 'Hamkor kategoriyalari',
  catsSub:
    "Hamkorlar tarmog'i kategoriyalar bo'yicha shakllantiriladi, kategoriyalar esa kompaniya qoidalari bo'yicha ochiladi.",
  screensTitle: 'Kabinet ekranlari',
  screensSub: 'HR uchta ekranda ishlaydi: qoidalar, limitlar va natija.',
  objTitle: 'Nega shunchaki mukofot bermaslik kerak?',
  objSub:
    "Mukofot ham pul, ham e'tibor sifatida tez unutiladi — imtiyoz esa har hafta eslatib turadi.",
  partnersOverline: 'Hamkorlarga',
  partnersLandTitle: 'Yopiq auditoriyaga risksiz kirish',
  partnersLandSub:
    "Siz faqat amalga oshgan tranzaksiya uchun to'laysiz — ulanish bepul.",
  becomePartner: "Hamkor bo'lish",
  offerOverline: 'Taklif',
  offerTitle: '3 oy bepul pilot',
  offerSub:
    "60 tagacha xodim, to'liq funksional, ulanish uchun to'lovsiz. Pilot yakunida — qamrov va utilizatsiya bo'yicha hisobot.",
  applyCta: 'Ariza qoldirish',
  formTitle: 'Bepul pilotga ariza',
  formSub:
    "Pilot 3 oy davom etadi va hech narsaga majburlamaydi. Bir ish kuni ichida bog'lanamiz.",
  fName: 'Ism va familiya',
  fCompany: 'Kompaniya',
  fSize: 'Xodimlar soni',
  fContact: 'Aloqa: telefon yoki email',
  fNameHint: 'majburiy',
  footer: "uCare — O'zbekiston kompaniyalari uchun korporativ imtiyozlar platformasi",
  footerNote:
    "Pilot 3 oy davom etadi, ulanish uchun to'lov olinmaydi. Yakunida qamrov va utilizatsiya bo'yicha hisobot beriladi.",
  footerProduct: 'Mahsulot',
  footerContacts: 'Aloqa',
  footerCity: 'Toshkent',

  // ── dashboard shell ───────────────────────────────────────────────────
  cabinet: 'HR kabineti',
  company: 'Kompaniya',
  companySub: '60 xodim · Toshkent',
  logout: 'Chiqish',
  employeeApp: 'Xodim ilovasi',

  // ── dashboard ─────────────────────────────────────────────────────────
  usageTitle: "Kategoriyalar bo'yicha sarf",
  periodAugust: 'Avgust 2026',
  usageTotal: 'Oy davomida jami',
  feedTitle: 'Oxirgi operatsiyalar',
  feedSub: 'Bugun',
  limitStateTitle: 'Limitlar holati',
  rulesCardTitle: 'Kirish qoidalari',
  rulesCardSub: 'faol qoida',
  openRules: 'Qoidalarga o‘tish',
  openLimits: 'Limitlarga o‘tish',

  // ── table columns ─────────────────────────────────────────────────────
  colEmployee: 'Xodim',
  colPartner: 'Hamkor',
  colAmount: 'Summa',
  colTime: 'Vaqt',
  colDept: "Bo'lim",
  colGrade: 'Greyd',
  colTenure: 'Staj',
  colAccess: 'Ochiq',
  colStatus: 'Holat',
  colLimit: 'Limit',
  colSpent: 'Sarflandi',
  colLeft: 'Qoldiq',
  colProgress: 'Sarf',
  colCategory: 'Kategoriya',

  // ── access rules ──────────────────────────────────────────────────────
  rulesTitle: 'Kirish qoidalari',
  rulesSub:
    "Imtiyoz uchta shart bo'yicha ochiladi: bo'lim, greyd va ish staji. Staj shartini keshbek ilovasi takrorlay olmaydi.",
  ladderTitle: "Ish staji bo'yicha ochilish",
  ladderNote:
    'Kategoriya kompaniyada ishlagan vaqtga qarab ochiladi — paket shuning uchun ushlab turadi.',
  tick3: '3 oy',
  tick6: '6 oy',
  tick12: '1 yil',
  tick24: '2 yil',
  hireDay: 'Ishga qabul',
  newRule: 'Yangi qoida',
  addRule: 'Qoida qo‘shish',
  fieldDept: "Bo'lim",
  fieldGrade: 'Greyd',
  fieldTenure: 'Ish staji',
  fieldCats: 'Ochiladigan kategoriyalar',
  cancel: 'Bekor qilish',
  saveRule: 'Qoidani saqlash',
  matrixTitle: 'Kategoriyalar va kirish darajalari',
  ruleWord: 'Qoida',
  ruleActive: 'Faol',
  peopleUnit: 'xodim',
  opensImmediately: 'darhol ochiq',
  opensHere: 'shu yerda ochiladi',

  // ── limits ────────────────────────────────────────────────────────────
  budgetLabel: 'Kompaniya byudjeti',
  budgetSub: 'Avgust 2026 · 60 xodim',
  month: 'Oy',
  quarter: 'Chorak',
  distributed: 'Taqsimlangan',
  spent: 'Sarflandi',
  reserve: 'Zaxira',
  limitNote:
    "Limit faqat hamkorlarda sarflanadi: naqd pulga chiqarilmaydi, kartaga o'tkazilmaydi va oy oxirida kompaniyada qoladi.",
  groupTitle: "Guruh bo'yicha limit",
  groupSub: "Limitni har bir xodimga alohida emas, bo'lim yoki greyd bo'yicha bir marta belgilang.",
  groupBy: 'Nima bo‘yicha',
  groupTarget: 'Guruh',
  groupAmount: 'Bir xodimga limit, UZS',
  groupHint: "Davr: oy. Qolgan mablag' keyingi oyga o'tmaydi",
  applyGroup: 'Limitlarni saqlash',
  limitsTableTitle: 'Xodimlar limitlari',
  limitsTableSub: '54 tadan 8 tasi',

  // ── partners ──────────────────────────────────────────────────────────
  partnersTitle: 'Hamkorlar',
  partnersSub:
    "Chegirma xodim va platforma o'rtasida taqsimlanadi — kompaniya ustama to'lamaydi.",
  addPartner: "Hamkor qo'shish",
  discount: 'Chegirma',
  splitEmp: 'Xodimga',
  splitPlat: 'Platformaga',

  // ── analytics ─────────────────────────────────────────────────────────
  analyticsTitle: 'Ushlab qolish analitikasi',
  analyticsSub:
    "Paketning ta'sirini kadrlar oqimi, qamrov va utilizatsiya orqali kuzatamiz.",
  utilTitle: "Kategoriyalar bo'yicha utilizatsiya",
  dynamicsTitle: 'Ulanishlar dinamikasi',
  horizonTitle: "Ta'sir 9–12 oyda o'lchanadi",
  horizonBody:
    "Kadrlar oqimi sekin o'zgaruvchi ko'rsatkich. Birinchi uch oyda qamrov va utilizatsiyaga qarang, oqim bo'yicha xulosani bazaviy chiziqdan bir yil o'tgach chiqaring.",
  turnoverTitle: "Bo‘limlar bo‘yicha kadrlar almashinuvi",
  turnoverSub: 'Bazaviy chiziq — 18,4 % kompaniya bo‘yicha',

  // ── people ────────────────────────────────────────────────────────────
  peopleTitle: 'Xodimlar',
  peopleSub: '54 ulangan · 6 taklifnoma yuborilgan',
  searchPlaceholder: 'Ism yoki bo‘lim bo‘yicha qidirish',
  pagerInfo: '54 tadan 8 tasi ko‘rsatilgan',
  prev: 'Oldingi',
  next: 'Keyingi',

  // ── employee app ──────────────────────────────────────────────────────
  backToCabinet: 'Kabinetga qaytish',
  tgClose: 'Yopish',
  mLimitLabel: 'Qolgan limit',
  mLimitSub: '1 500 000 dan · 1-sentabrda yangilanadi',
  mCatsLabel: 'Sizga ochiq',
  mPartnerAddr: 'Chilonzor 12 · 1,2 km',
  mQrHint: "Kassada QR ko'rsating — summa limitdan yechiladi",
  mPay: 'QR bilan to‘lash',

  // ── toasts ────────────────────────────────────────────────────────────
  toastApplication: 'Ariza yuborildi',
  toastRuleSaved: 'Qoida saqlandi',
  toastLimitsSaved: 'Limitlar saqlandi',

  // ── reference data ────────────────────────────────────────────────────
  cat: {
    food: 'Ovqatlanish',
    coffee: 'Kofe',
    fitness: 'Fitnes',
    med: 'Tibbiyot',
    pharm: 'Dorixona',
    edu: "Ta'lim",
    taxi: 'Taksi',
  },
  /** Index 0 is "all departments"; the rest are indexed by the mock data. */
  depts: [
    "Barcha bo'limlar",
    'Ishlab chiqish',
    'Sotuv',
    'Marketing',
    'Operatsiyalar',
    'Moliya',
  ],
  grades: ['Barcha greydlar', 'Junior+', 'Middle+', 'Senior'],
  tenures: ['1-kundan', '3 oydan', '6 oydan', '1 yildan', '2 yildan'],
  nav: {
    dash: 'Boshqaruv paneli',
    people: 'Xodimlar',
    partners: 'Hamkorlar',
    rules: 'Kirish qoidalari',
    limits: 'Limitlar',
    analytics: 'Analitika',
  },
  levels: [
    { label: "Boshlang'ich", range: '0–6 oy' },
    { label: 'Standart', range: '6 oy – 2 yil' },
    { label: 'Kengaytirilgan', range: '2 yildan' },
  ],
  groupBySelect: { dept: "Bo‘lim", grade: 'Greyd' },
  statusOptions: {
    all: 'Barcha holatlar',
    ok: 'Ulangan',
    inv: 'Taklif yuborildi',
  },
  partnerStatus: { ok: 'Faol', test: 'Sinovda', draft: 'Muhokamada' },
  peopleStatus: { ok: 'Ulangan', inv: 'Taklif yuborildi' },
  months: ['Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg'],

  // ── landing content ───────────────────────────────────────────────────
  heroStats: ['bepul pilot', "ish haqi fondi o‘sishi", 'hamkor kategoriyasi'],
  heroStatValues: ['3 oy', '0 %', '7'],
  trust: [
    'ta ish beruvchi bilan chuqur intervyu',
    "o‘rganilgan kompaniyalarda kadrlar almashinuvi",
    'kompaniya xodimlarga individual tanlov kerak deb hisoblaydi',
  ],
  problems: [
    {
      title: 'Qo‘lda administratsiya',
      body: 'HR imtiyozlarni jadvallarda yuritadi, har bir to‘lov alohida kelishiladi.',
    },
    {
      title: 'Samara o‘lchanmaydi',
      body: 'Byudjet sarflanadi, lekin qamrov va taʼsir bo‘yicha raqam yo‘q.',
    },
    {
      title: 'Xodimda tanlov yo‘q',
      body: 'Hammaga bir xil to‘plam beriladi, u ko‘pchilikka mos kelmaydi.',
    },
  ],
  steps: [
    {
      title: 'Kompaniya kirish qoidalarini sozlaydi',
      body: 'Bo‘lim, greyd va ish staji — imtiyoz shu uchta shart bo‘yicha ochiladi.',
    },
    {
      title: 'Xodim shaxsan unga ochiq narsani ko‘radi',
      body: 'Ilovada faqat unga tegishli kategoriyalar va qolgan limit ko‘rinadi.',
    },
    {
      title: 'Hamkorga QR orqali chegirma bilan to‘laydi',
      body: 'Kassada QR, summa limitdan yechiladi, hisobot avtomatik yig‘iladi.',
    },
  ],
  voices: [
    {
      quote: 'Yagona avtomatlashtirilgan platforma yo‘q, hammasi qo‘lda hisoblanadi',
      role: 'Xususiy klinika HR direktori',
    },
    {
      quote: 'Imtiyozlarni boshqarish HR resurslarini talab qiladi',
      role: "Universitet People bo‘limi",
    },
    {
      quote: 'Ish haqi oshirilishi qoniqmaslik muammosini hal qilmaydi',
      role: "Taʼlim kompaniyasi rahbari",
    },
  ],
  diffA: [
    'Odam qayerda ishlashini bilmaydi',
    'Ish stajini hisobga ololmaydi',
    'Uchinchi yil uchun kengaytirilgan kirishni ocha olmaydi',
    'Chegirma hammaga bir xil, ish beruvchi bunga taʼsir qilmaydi',
  ],
  diffB: [
    'Kirish qoidalarini ish beruvchi belgilaydi',
    'Kirish bo‘lim, greyd va stajga bog‘liq',
    'Kengaytirilgan kategoriyalar ish stajiga qarab ochiladi',
    'Byudjet, limitlar va hisobot kompaniyada qoladi',
  ],
  objections: [
    {
      title: 'Mukofot byudjetda eriydi',
      body: 'Bir oydan keyin u ish beruvchining g‘amxo‘rligi sifatida qabul qilinmaydi — bu shunchaki maoshning bir qismi.',
    },
    {
      title: 'Har haftalik imtiyoz esda qoladi',
      body: 'Haftada bir necha marta ishlatiladigan imtiyoz ish beruvchi bilan bevosita bog‘lanadi.',
    },
    {
      title: 'Chegirma sotib olish qobiliyatini kengaytiradi',
      body: 'Hamkor chegirmasi bir xil summani kattaroq qiladi, mukofot esa buni qila olmaydi.',
    },
  ],
  partnerPoints: [
    {
      title: 'Faqat amalga oshgan tranzaksiya uchun to‘lov',
      body: 'Ulanish bepul.',
    },
    {
      title: 'Yopiq auditoriya',
      body: 'Mijoz kompaniyalarning xodimlari — limit bilan va sotib olishga tayyor.',
    },
    {
      title: 'Jalb qilish uCare zimmasida',
      body: 'Kategoriya ilovada ochilganda xodim hamkorni ko‘radi.',
    },
  ],
  screenCaps: [
    { title: 'Kirish qoidalari', body: "Bo‘lim, greyd va staj bo‘yicha ochilish" },
    { title: 'Limitlar', body: "Byudjet va xodimlar bo‘yicha taqsimot" },
    { title: 'Analitika', body: 'Qamrov, utilizatsiya va dinamika' },
  ],

  // ── metric and analytics captions ─────────────────────────────────────
  metrics: [
    { label: 'Ulangan xodimlar', sub: '+4 oldingi oyga' },
    { label: 'Qamrov', sub: '+6 p.p. oldingi oyga' },
    { label: 'Oyda faol', sub: '87 % ulanganlardan' },
    { label: 'Oydagi operatsiyalar', sub: "o‘rtacha chek 187 000 UZS" },
  ],
  analytics: [
    {
      label: 'Bazaviy kadrlar oqimi',
      delta: 'Mart 2026 dagi bazaviy chiziq',
      sub: "Yillik ko'rsatkich, pilotdan oldin qayd etilgan",
    },
    {
      label: 'Utilizatsiya',
      delta: '+8,2 oldingi oyga',
      sub: 'Taqsimlangan byudjetdan sarflangan ulush',
    },
    {
      label: 'Xodimlar qamrovi',
      delta: '54 / 60',
      sub: 'Ilovani faollashtirgan xodimlar',
    },
    {
      label: 'Faol foydalanuvchilar',
      delta: '87% ulanganlardan',
      sub: 'Oy davomida kamida bitta operatsiya',
    },
  ],

  // ── strings that are part of a data row ───────────────────────────────
  partnerPlaces: [
    '14 nuqta · Toshkent',
    '6 nuqta · Toshkent',
    '3 klub · Chilonzor, Yunusobod',
    '2 klinika · Toshkent',
    '22 dorixona',
    'Kurslar va sertifikatlar',
    'Ish kunlari 07:00–21:00',
    'Shartnoma imzolanmoqda',
  ],
  peopleTenures: [
    '2 y 4 oy',
    '8 oy',
    '1 y 2 oy',
    '3 y 1 oy',
    '5 oy',
    '1 y 7 oy',
    '2 oy',
    '4 oy',
  ],
  employeeNotes: {
    daily: 'Har kuni',
    from6: '6 oydan ochiq',
    from12: '1 yildan',
    from24: '2 yildan',
  },
  employeeTabs: ['Bosh sahifa', 'Katalog', 'Tarix', 'Profil'],

  /** Decimal separator for this locale — see `formatDecimal` in mock/derive.ts. */
  decimalSeparator: ',',
} as const
