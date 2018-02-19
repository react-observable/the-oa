import { empty } from 'rxjs/observable/empty';
import { map } from 'rxjs/operators/map';
import { createFrame } from './frame';
import { takeWhileInclusive } from './takeWhileInclusive';
import { linear } from './eases';

const getVectorMap = (from, to) => {
  const vectorMap = {};

  const fromKeys = Object.keys(from);
  const toKeys = Object.keys(to);
  if (fromKeys.length >= toKeys.length) {
    fromKeys.forEach(key => {
      vectorMap[key] = (to[key] || 0) - from[key];
    });
  } else {
    toKeys.forEach(key => {
      vectorMap[key] = to[key] - (from[key] || 0);
    });
  }
  return vectorMap;
};

export const tween = ({ duration = 300, from, to, ease = linear }) => {
  if (from.toString() !== '[object Object]') {
    console.warn('from must be a plain object!');
    return empty();
  }

  if (to.toString() !== '[object Object]') {
    console.warn('to must be a plain object!');
    return empty();
  }
  const realFrom = Object.assign({}, from);
  const realTo = Object.assign({}, to);
  const vectorMap = getVectorMap(realFrom, realTo);
  
  if (Object.values(vectorMap).every(x => x === 0)) {
    return empty();
  }

  const frame = createFrame();

  return frame.pipe(
    takeWhileInclusive(detalTime => detalTime <= duration),
    map(detalTime =>
      Object.keys(vectorMap).reduce((state, key) => {
        state[key] =
          vectorMap[key] * ease(Math.min(detalTime / duration, 1)) +
          (realFrom[key] || 0);
        return state;
      }, {})
    )
  );
};
