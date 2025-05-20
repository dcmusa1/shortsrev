/**
 * Format number to display with k, M suffix
 * @param num Number to format
 * @param decimals Number of decimal places
 * @returns Formatted string
 */
export function formatNumber(num: number, decimals = 1): string {
  if (num === null || num === undefined || isNaN(num)) return "0"

  if (num >= 1000000) {
    return (num / 1000000).toFixed(decimals).replace(/\.0$/, "") + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(decimals).replace(/\.0$/, "") + "k"
  }
  return num.toString()
}

/**
 * Format currency with commas and $ symbol
 * @param amount Amount to format
 * @returns Formatted string
 */
export function formatCurrency(amount: number): string {
  if (amount === null || amount === undefined || isNaN(amount)) return "$0"

  return "$" + amount.toLocaleString("en-US")
}
