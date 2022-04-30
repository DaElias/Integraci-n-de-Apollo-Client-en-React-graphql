import { useEffect, useState, useRef } from "react";

export const useNearScreem = () => {
  const [show, setShow] = useState(false);
  const elemt = useRef(null);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      // console.log(elemt.current);
      const observer = new window.IntersectionObserver(function (entries) {
        //* valdiar que esta el viewport
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(elemt.current);
    });
  }, [elemt]);

  return [show, elemt];
};

