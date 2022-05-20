import { useState, useEffect } from "react";

import { debounceTime } from "rxjs/operators";
import { Subject } from "rxjs";

const useDebounce = (
  time: number,
  initialValue: string
): [string, (value: string) => void] => {
  const [value, setValue] = useState(initialValue);
  const [values] = useState(() => new Subject<string>());
  useEffect(() => {
    const sub = values.pipe(debounceTime(time)).subscribe(setValue);
    return () => sub.unsubscribe();
  }, [time, values]);
  return [value, (v: string) => values.next(v)];
};

export default useDebounce;
