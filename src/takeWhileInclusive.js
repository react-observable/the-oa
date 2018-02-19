import { Observable } from 'rxjs/Observable';

export const takeWhileInclusive = predicate => originalObs =>
  Observable.create(observer => {
    const subscription = originalObs.subscribe({
      next: value => {
        observer.next(value);

        if (!predicate(value)) {
          observer.complete();
        }
      },
      error: error => observer.error(error),
      complete: () => observer.complete(),
    });

    return subscription;
  });
