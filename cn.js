// src/utils/cn.js
// Utility for merging Tailwind class names safely
// Combines clsx (conditional classes) + tailwind-merge (conflict resolution)

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes without conflicts.
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
