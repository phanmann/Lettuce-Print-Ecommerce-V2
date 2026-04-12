export function calculateUnitPrice(startingPrice:number, quantity:number) {
  if (quantity >= 2500) return Math.round(startingPrice * 0.8);
  if (quantity >= 1000) return Math.round(startingPrice * 0.9);
  if (quantity >= 500) return startingPrice;
  return Math.round(startingPrice * 1.15);
}
export function formatCurrency(amount:number) {
  return new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(amount);
}
