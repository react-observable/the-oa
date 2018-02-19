export const linear = t => t;

export const cubicOut = t => {
  const f = t - 1.0;
  return f * f * f + 1.0;
};

export const cubicIn = t => t * t * t;

export const cubicInOut = t =>
  t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;

export const backIn = t => {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
};

export const backOut = t => {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
};

export const backInOut = t => {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
};

export const bounceOut = t => {
  const a = 4.0 / 11.0;
  const b = 8.0 / 11.0;
  const c = 9.0 / 10.0;

  const ca = 4356.0 / 361.0;
  const cb = 35442.0 / 1805.0;
  const cc = 16061.0 / 1805.0;

  const t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
};

export const bounceIn = t => 1.0 - bounceOut(1.0 - t);

export const bounceInOut = t =>
  t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;

export const expoInOut = t =>
  t === 0.0 || t === 1.0
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;

export const expoIn = t => (t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0)));

export const expoOut = t => (t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t));
