import {
  cancelOnFrameUpdate,
  onFrameUpdate,
  currentTime,
  currentFrameTime,
  timeSinceLastFrame,
} from 'framesync';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';

export function createFrame() {
  return defer(() => {
    const startTime = currentTime();
    let elapsed = 0;
    let isActive = true;
    return Observable.create(observer => {
      const nextFrame = () => {
        if (isActive) {
          elapsed = elapsed + timeSinceLastFrame();
          observer.next(Math.max(elapsed, 0));
          onFrameUpdate(nextFrame);
        }
      };
      onFrameUpdate(nextFrame);

      return () => {
        cancelOnFrameUpdate(nextFrame);
        isActive = false;
      };
    });
  });
}
