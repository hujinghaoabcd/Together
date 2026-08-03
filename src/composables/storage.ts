export const STORAGE_KEYS = {
  blessings: 'together-blessings',
  wishlist: 'together-wishlist',
} as const

export type TogetherBackup = {
  version: 1
  exportedAt: string
  data: Partial<Record<(typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS], unknown>>
}

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T

export function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return clone(fallback)
    return JSON.parse(raw) as T
  } catch {
    return clone(fallback)
  }
}

export function writeStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function resetStorage(key: string): void {
  localStorage.removeItem(key)
}

export function createBackup(): TogetherBackup {
  const data: TogetherBackup['data'] = {}
  Object.values(STORAGE_KEYS).forEach((key) => {
    const raw = localStorage.getItem(key)
    if (!raw) return
    try {
      data[key] = JSON.parse(raw)
    } catch {
      // Ignore corrupted local data instead of exporting an invalid backup.
    }
  })
  return { version: 1, exportedAt: new Date().toISOString(), data }
}

export function downloadBackup(): void {
  const payload = JSON.stringify(createBackup(), null, 2)
  const blob = new Blob([payload], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `together-backup-${new Date().toISOString().slice(0, 10)}.json`
  anchor.click()
  URL.revokeObjectURL(url)
}

export async function importBackup(file: File): Promise<void> {
  const parsed = JSON.parse(await file.text()) as TogetherBackup
  if (!parsed || parsed.version !== 1 || typeof parsed.data !== 'object') {
    throw new Error('不是可识别的 Together 备份文件')
  }

  Object.values(STORAGE_KEYS).forEach((key) => {
    if (!(key in parsed.data)) return
    localStorage.setItem(key, JSON.stringify(parsed.data[key]))
  })
}

export function clearTogetherData(): void {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key))
}
