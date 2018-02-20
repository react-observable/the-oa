# The-OA

> A reactive animation library.

<img src="https://github.com/Jerry-Hong/react-oa/blob/master/assets/logo.png?raw=true" width="300">

- **Observable-base**: Everything is observable (Rxjs)!
- **Fast**: Dispatch value on animation frame without any waste.
- **Tiny**: Only **4 kb** (without gzip)

## Install

```bash
npm install the-oa --save
```

or 

```bash
yarn add the-oa
```

## Usage

```javascript
import { tween, easing } from 'the-oa';

const squareDOM = document.getElementById('square');

tween({
  from: { x: 0, r: 0 },
  to: { x: 500, r: 180 },
  duration: 1200,
  ease: easing.backOut,
}).subscribe(({ x, r }) => {
  squareDOM.style.transform = `translateX(${x}px) rotateZ(${r}deg)`;
});
```

## Demo

[![Edit the-oa](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v07llx1l90)

## API

### `tween(config): Observable`

**Arguments**

- config : 

```typescript
{
    from: any,
    to: any,
    duration?: number,
    ease?: function
}
```

