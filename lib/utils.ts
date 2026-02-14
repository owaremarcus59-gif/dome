import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  value:any,
  locale = "en-GH",
  currency = "GHS"
) {
  if (value === null || value === undefined) return "";

  // Remove commas, spaces, currency symbols, etc.
  const numericValue = Number(
    String(value).replace(/[^0-9.-]/g, "")
  );

  if (Number.isNaN(numericValue)) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(numericValue);
}

export  function configpath (str:string) {
    let ans = str.split(' ')
    let res = ans.join('').toString();
    console.log(res.toString())
    return res.toString()

}