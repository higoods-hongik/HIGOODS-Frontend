import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const useScreenWidth = (time: number = 200) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
  }, time);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};

export default useScreenWidth;
