import { State, store } from "./store";
import { useEffect, useState } from "react";

export function useStoreAfterInitialization<T>(
  getter: (state: State) => T,
  initializer: () => unknown,
) {
  const [state, setState] = useState(getter(store.getState()));
  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setState(getter(store.getState())),
    );
    initializer();
    return unsubscribe;
  }, []);
  return state;
}

export function useStore<T>(getter: (state: State) => T) {
  return useStoreAfterInitialization(getter, () => {});
}
