/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTypingEffect } from "@/lib/hooks/useTypingEffect";
import styles from "./Home.module.scss";
import { useCanvasDotEffect } from "@/lib/hooks/useCanvasDotEffect";

const Home = () => {
  const [typingText1, typingText2] = useTypingEffect();
  useCanvasDotEffect();
  return (
    <div>
      <div className={styles.canvas_div}>
        <canvas id="canvas"></canvas>
        <div className={styles.main}>
          <div className={styles.centeredText}>
            <div className={styles.intro}>
              {`Hello, I'm`} <span>Akash Negi</span>. A passionate Software
              Engineer.
            </div>

            <div className={styles.tech}>
              <span>{typingText1} </span>
              {typingText2}
              <span className={styles.cursor}></span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        {` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </div>
    </div>
  );
};

export default Home;
