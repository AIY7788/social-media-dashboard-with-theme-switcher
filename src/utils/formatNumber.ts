export function formatNumber(value: number) {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (value >= 10_000) {
    return (value / 1_000).toFixed(0) + "k";
  }
  return value.toString();
}

export function formatWithComma(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
