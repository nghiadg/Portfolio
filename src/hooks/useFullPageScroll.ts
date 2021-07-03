import React, { useEffect, useState, useRef } from "react";

export const useFullPageScroll = (
  containerRef: React.RefObject<HTMLDivElement>
): { translateY: number; isEndPage: boolean } => {
  const touchStartRef = useRef<number>(0);
  const disabled = useRef<boolean>(false);
  const numberOfPage = useRef<number>(0);

  const [isEndPage, setIsEndPage] = useState(false);
  useEffect(() => {
    if (containerRef.current) {
      numberOfPage.current =
        containerRef.current.scrollHeight / containerRef.current.clientHeight;
    }
  }, []);

  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    window.addEventListener("wheel", onMouseWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onWheelMobile);
    return () => {
      window.removeEventListener("wheel", onMouseWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onWheelMobile);
    };
  });

  useEffect(() => {
    if (translateY == 100 * (numberOfPage.current - 1)) {
      setIsEndPage(true);
    } else {
      setIsEndPage(false);
    }
  }, [translateY]);

  function onMouseWheel(e: WheelEvent) {
    if (e.deltaY > 0) {
      handleScrollDown();
    } else {
      handleScrollUp();
    }
  }

  function onTouchStart(e: TouchEvent) {
    touchStartRef.current = e.touches[0].clientY;
  }

  function onWheelMobile(e: TouchEvent) {
    const touchEnd = e.changedTouches[0].clientY;
    if (touchStartRef.current > touchEnd + 5) {
      handleScrollDown();
    } else {
      handleScrollUp();
    }
  }

  function handleScrollUp() {
    if (disabled.current) {
      return;
    }

    if (translateY >= 100) {
      disabled.current = true;
      setTranslateY(translateY - 100);
      setTimeout(() => {
        disabled.current = false;
      }, 1000);
    }
  }

  function handleScrollDown() {
    if (disabled.current) {
      return;
    }

    if (translateY < 100 * (numberOfPage.current - 1)) {
      disabled.current = true;
      setTranslateY(translateY + 100);
    }
    setTimeout(() => {
      disabled.current = false;
    }, 1000);
  }

  return { translateY, isEndPage };
};
