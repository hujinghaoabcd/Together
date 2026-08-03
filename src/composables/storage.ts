export const STORAGE_KEYS = {
  blessings: 'together-blessings',
  wishlist: 'together-wishlist',
  moments: 'together-moments',
  notes: 'together-notes',
} as const

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]
const storageKeys = Object.values(STORAGE_KEYS) as StorageKey[]

export type TogetherBackup = {
  version: 1
  exportedAt: string
  data: Partial<Record<StorageKey, unknown>>
}

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T

export function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return clone(fallback)
    const parsed = JSON.parse(raw) as T
    return parsed ?? clone(fallback)
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
  storageKeys.forEach((key) => {
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
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

export async function importBackup(file: File): Promise<void> {
  const parsed = JSON.parse(await file.text()) as TogetherBackup
  if (
    !parsed ||
    parsed.version !== 1 ||
    !parsed.data ||
    typeof parsed.data !== 'object' ||
    Array.isArray(parsed.data)
  ) {
    throw new Error('不是可识别的 Together 备份文件')
  }

  storageKeys.forEach((key) => {
    if (!(key in parsed.data)) return
    localStorage.setItem(key, JSON.stringify(parsed.data[key]))
  })
}

export function clearTogetherData(): void {
  storageKeys.forEach((key) => localStorage.removeItem(key))
}
