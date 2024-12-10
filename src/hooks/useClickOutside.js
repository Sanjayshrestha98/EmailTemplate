import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    // Handle click events outside the element
    const listener = (event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendant elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };

    // Validate whether the event started inside the element
    const validateEventStart = (event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };

    // Handle escape key press
    const escListener = (event) => {
      if (event.key === "Escape") {
        handler(event); // Trigger handler on Escape key
      }
    };

    // Adding event listeners for click, mousedown, touchstart, and keydown (Escape)
    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);
    document.addEventListener("keydown", escListener); // Listening for Escape key press

    // Cleanup event listeners when the component unmounts or changes
    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
      document.removeEventListener("keydown", escListener); // Cleanup Escape listener
    };
  }, [ref, handler]);
};

export default useClickOutside;
