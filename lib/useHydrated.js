import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// false during the server render and hydration, true once running in the browser.
// Lets carousels ship every slide as plain HTML and only start Swiper client-side.
export default function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
