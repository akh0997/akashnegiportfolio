import { useEffect } from "react";

export const useTechAnimate = (id: string, angle: number) => {
  useEffect(() => {
    let degrees = angle;
    setInterval(() => {
      const elm = document.getElementById(id);
      if (degrees < 360 && elm) {
        const radians = degrees * (Math.PI / 180);
        const cosine = Math.cos(radians);
        const sine = Math.sin(radians);
        degrees += 0.1;
        const y = 200 + 200 * sine;
        const x = 200 + 200 * cosine;
        elm.style.transform = "translate(" + x + "px," + y + "px)";
      } else {
        degrees = 0;
      }
    }, 5);
  }, [id, angle]);
};
