/**
 * 将值转换成偏移百分比
 */
export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

/**
 * 将偏移量百分比转换成介于min和max之间的值
 */
export function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

/**
 * 将值收紧在 min 和 max 之间
 */
export function clamp(value: number, min: number, max: number) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}