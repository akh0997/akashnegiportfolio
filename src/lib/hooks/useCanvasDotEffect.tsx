import { useEffect } from "react";
import { Dot } from "../utils/dot";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useCanvasDotEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as any;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const dots: any[] = [];
      const numDots = 300;
      const connectRadius = 300;
      const dotConnectRadicus = 80;
      const mouse = { x: null, y: null };

      // Create dots
      for (let i = 0; i < numDots; i++) {
        dots.push(new Dot(i, canvas, ctx));
      }

      // Track mouse
      document.body.addEventListener("mousemove", (e: any) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      document.body.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
      });

      function connectDotsToMouse() {
        if (mouse.x === null || mouse.y === null) return;
        const connectingDots: any[] = [];
        dots.forEach((dot) => {
          const dx = (mouse?.x ?? 0) - dot.x;
          const dy = (mouse?.y ?? 0) - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectRadius) {
            connectingDots.push({ dot: dot, dist: dist });
          }
        });

        for (let i = 0; i < connectingDots.length; i++) {
          for (let j = 0; j < connectingDots.length; j++) {
            if (i !== j) {
              const dx = connectingDots[i].dot.x - connectingDots[j].dot.x;
              const dy = connectingDots[i].dot.y - connectingDots[j].dot.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const colorRad = Math.max(
                connectingDots[i].dist,
                connectingDots[j].dist
              );
              if (dist < dotConnectRadicus) {
                ctx.beginPath();
                ctx.moveTo(connectingDots[i].dot.x, connectingDots[i].dot.y);
                ctx.lineTo(connectingDots[j].dot.x, connectingDots[j].dot.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${
                  1 - colorRad / connectRadius
                })`;
                ctx.stroke();
              }
            }
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach((dot) => {
          dot.move();
          dot.draw();
        });

        connectDotsToMouse();

        requestAnimationFrame(animate);
      }

      animate();

      // Resize canvas on window resize
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
  }, []);
};
