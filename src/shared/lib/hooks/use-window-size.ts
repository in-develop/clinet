import { useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState({
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWidth({
        width: window.innerWidth,
      });
    }

    // Первичный вызов
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
