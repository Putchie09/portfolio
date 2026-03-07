import { useEffect, useRef, useState } from "react";

function CustomScrollbar() {
  const thumbRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(40);
  const [thumbTop, setThumbTop] = useState(0);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    function update() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const ratio = clientHeight / scrollHeight;
      const newThumbHeight = Math.max(ratio * clientHeight, 40);
      const maxThumbTop = clientHeight - newThumbHeight;
      const newThumbTop =
        (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;
      setThumbHeight(newThumbHeight);
      setThumbTop(newThumbTop);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function onMouseDown(e) {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartScroll.current = document.documentElement.scrollTop;
    e.preventDefault();
  }

  useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging.current) return;
      const { scrollHeight, clientHeight } = document.documentElement;
      const maxThumbTop = clientHeight - thumbHeight;
      const deltaY = e.clientY - dragStartY.current;
      const scrollRatio = deltaY / maxThumbTop;
      document.documentElement.scrollTop =
        dragStartScroll.current + scrollRatio * (scrollHeight - clientHeight);
    }

    function onMouseUp() {
      isDragging.current = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [thumbHeight]);

  return (
    <div
      className="fixed top-0 right-0 z-[9999] pointer-events-none"
      style={{ width: "8px", height: "100vh" }}
    >
      <div
        ref={thumbRef}
        onMouseDown={onMouseDown}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{
          top: `${thumbTop}px`,
          height: `${thumbHeight}px`,
          width: "7px",
          left: "1px",
          backgroundColor: "#6b44cc",
          borderRadius: "999px",
        }}
      />
    </div>
  );
}

export default CustomScrollbar;
