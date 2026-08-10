import type { CategoryKey } from './categories'

/** Spend and utilisation per category. */
export const USAGE: { key: CategoryKey; amount: number; util: number }[] = [
  { key: 'food', amount: 19_900_000, util: 78 },
  { key: 'fitness', amount: 12_300_000, util: 64 },
  { key: 'coffee', amount: 7_000_000, util: 71 },
  { key: 'edu', amount: 7_000_000, util: 43 },
  { key: 'med', amount: 5_300_000, util: 38 },
  { key: 'pharm', amount: 4_100_000, util: 52 },
  { key: 'taxi', amount: 2_800_000, util: 29 },
]

/** Largest value, used to normalise the spend bars. */
export const USAGE_MAX = 19_900_000

/** Recent transactions feed. */
export const FEED: {
  who: string
  partner: string
  category: CategoryKey
  amount: number
  time: string
}[] = [
  { who: 'Aziza Rahimova', partner: 'Zamin Fitness', category: 'fitness', amount: 145_000, time: '14:20' },
  { who: 'Bekzod Toʻxtayev', partner: 'Qahva Nuqta', category: 'coffee', amount: 32_000, time: '13:52' },
  { who: 'Dilnoza Yoʻldosheva', partner: 'Lazzat Kafe', category: 'food', amount: 68_000, time: '13:10' },
  { who: 'Sardor Qodirov', partner: 'Shifo Med', category: 'med', amount: 420_000, time: '12:35' },
  { who: 'Malika Ergasheva', partner: 'Dorimed', category: 'pharm', amount: 96_000, time: '11:48' },
  { who: 'Javohir Nazarov', partner: 'Bilim Hub', category: 'edu', amount: 1_200_000, time: '10:05' },
]

/** Metric tiles; captions come from the dictionary. */
export const METRICS: { icon: string; value: string }[] = [
  { icon: 'users', value: '54 / 60' },
  { icon: 'target', value: '90 %' },
  { icon: 'activity', value: '47' },
  { icon: 'receipt', value: '312' },
]
