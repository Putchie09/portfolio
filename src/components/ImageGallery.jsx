import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

const SWIPE_THRESHOLD = 50; // px

// Screenshot carousel for the case study modal: arrows, dots, ←/→ keys and
// swipe. With a single image it renders the image alone, without controls.
function ImageGallery({ images, title }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;
  const hasMany = count > 1;

  const go = (step) => setIndex((current) => (current + step + count) % count);

  useEffect(() => {
    if (!hasMany) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany, count]);

  const arrowClass =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur transition-colors duration-200 hover:bg-black/85";

  return (
    <div
      role={hasMany ? "group" : undefined}
      aria-roledescription={hasMany ? "carousel" : undefined}
      aria-label={hasMany ? t("projects.gallery", { title }) : undefined}
      className="relative aspect-[16/9] w-full overflow-hidden bg-background"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || !hasMany) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={t("projects.screenshotAlt", { title })}
          aria-hidden={i === index ? undefined : true}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      ))}

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t("projects.previousImage")}
            className={`${arrowClass} left-3`}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t("projects.nextImage")}
            className={`${arrowClass} right-3`}
          >
            <ChevronRightIcon />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center">
            <div className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={t("projects.goToImage", { number: i + 1, total: count })}
                  aria-current={i === index ? "true" : undefined}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all duration-200 ${
                      i === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <span className="sr-only" aria-live="polite">
            {t("projects.imageCounter", { number: index + 1, total: count })}
          </span>
        </>
      )}
    </div>
  );
}

export default ImageGallery;
