// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 1. Existing Utility for Tailwind Class Merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 2. New Utility for Professional Price Formatting
// This makes sure your "3 Lac" or "$1,200" looks clean on the site
export function formatPrice(
  price: number | string,
  currency: 'USD' | 'PKR' = 'PKR'
) {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(Number(price))
}