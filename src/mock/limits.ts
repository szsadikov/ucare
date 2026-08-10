/** Employee limits: name, department index, limit and amount spent. */
export const LIMIT_ROWS: { name: string; dept: number; limit: number; spent: number }[] = [
  { name: 'Aziza Rahimova', dept: 1, limit: 2_000_000, spent: 1_240_000 },
  { name: 'Bekzod Toʻxtayev', dept: 2, limit: 1_500_000, spent: 1_460_000 },
  { name: 'Dilnoza Yoʻldosheva', dept: 3, limit: 1_500_000, spent: 620_000 },
  { name: 'Sardor Qodirov', dept: 1, limit: 2_000_000, spent: 2_000_000 },
  { name: 'Malika Ergasheva', dept: 4, limit: 1_200_000, spent: 385_000 },
  { name: 'Javohir Nazarov', dept: 5, limit: 1_200_000, spent: 900_000 },
  { name: 'Nilufar Karimova', dept: 3, limit: 1_500_000, spent: 1_105_000 },
  { name: 'Otabek Yusupov', dept: 1, limit: 2_000_000, spent: 340_000 },
]

/** Defaults for the "limit by group" form. */
export const GROUP_LIMIT_DEFAULTS = {
  by: 'dept' as 'dept' | 'grade',
  target: 'd0',
  amount: '2 000 000',
}

/** Share of the budget allocated across employees. */
export const DISTRIBUTED_SHARE = 0.9
