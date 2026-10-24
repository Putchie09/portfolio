import { useEffect, useRef, useState } from "react";

// Replaces the hidden native scrollbar (see index.css) with a themed,
// draggable thumb.
const MIN_THUMB_HEIGHT = 40;

function getThumbGeometry() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const height = Math.max((clientHeight / scrollHeight) * clientHeight, MIN_THUMB_HEIGHT);
  const scrollable = scrollHeight - clientHeight;
  // Short pages can't scroll; avoid dividing by zero.
  const top = scrollable > 0 ? (scrollTop / scrollable) * (clientHeight - height) : 0;
  return { height, top };
}

function CustomScrollbar() {
  const [thumb, setThumb] = useState({ height: MIN_THUMB_HEIGHT, top: 0 });
  const drag = useRef({ active: false, startY: 0, startScroll: 0 });

  useEffect(() => {
    const update = () => setThumb(getThumbGeometry());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    function onMouseMove(event) {
      if (!drag.current.active) return;
      const { scrollHeight, clientHeight } = document.documentElement;
      const trackSpace = clientHeight - thumb.height;
      if (trackSpace <= 0) return;
      const scrollRatio = (event.clientY - drag.current.startY) / trackSpace;
      document.documentElement.scrollTop =
        drag.current.startScroll + scrollRatio * (scrollHeight - clientHeight);
    }

    function onMouseUp() {
      drag.current.active = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [thumb.height]);

  function onMouseDown(event) {
    drag.current = {
      active: true,
      startY: event.clientY,
      startScroll: document.documentElement.scrollTop,
    };
    event.preventDefault();
  }

  return (
    <div className="fixed top-0 right-0 z-[9999] pointer-events-none w-2 h-screen">
      <div
        onMouseDown={onMouseDown}
        className="absolute left-px w-[7px] rounded-full bg-accent-light/55 pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{ top: `${thumb.top}px`, height: `${thumb.height}px` }}
      />
    </div>
  );
}

export default CustomScrollbar;
