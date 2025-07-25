/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTypingEffect } from "@/lib/hooks/useTypingEffect";
import styles from "./Home.module.scss";
import { useCanvasDotEffect } from "@/lib/hooks/useCanvasDotEffect";
import { useTechAnimate } from "@/lib/hooks/useTechAnimate";
import ReactIcon from "../SvgIcons/ReactIcon";
import NextJsIcon from "../SvgIcons/NextJsIcon";
import AngularIcon from "../SvgIcons/AngularIcon";
import HTMLIcon from "../SvgIcons/HTMLIcon";
import CSSIcon from "../SvgIcons/CSSIcon";
import JavaScriptIcon from "../SvgIcons/Javascript";
import TypeScriptIcon from "../SvgIcons/TypeScriptIcon";
const Home = () => {
  const [typingText1, typingText2] = useTypingEffect();
  useCanvasDotEffect();
  useTechAnimate("react", 0);
  useTechAnimate("next", 51.43);
  useTechAnimate("angular", 102.86);
  useTechAnimate("html", 154.29);
  useTechAnimate("javascript", 205.71);
  useTechAnimate("typescript", 257.14);
  useTechAnimate("css", 308.57);

  return (
    <div>
      <div className={styles.canvas_div} id="moving_dot_container">
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
      <div className={styles.about_container}>
        <div className={styles.animate_parent}>
          <div className={styles.techstack_container}>
            <div className={styles.animate_content} id="react">
              <ReactIcon />
              <p>React</p>
            </div>

            <div className={styles.animate_content} id="next">
              <NextJsIcon />
              <p>Next.Js</p>
            </div>
            <div className={styles.animate_content} id="angular">
              <AngularIcon />
              <p>Angular</p>
            </div>
            <div className={styles.animate_content} id="html">
              <HTMLIcon />
              <p>HTML</p>
            </div>
            <div className={styles.animate_content} id="javascript">
              <JavaScriptIcon />
              <p>Javascript</p>
            </div>
            <div className={styles.animate_content} id="typescript">
              <TypeScriptIcon />
              <p>Typescript</p>
            </div>
            <div className={styles.animate_content} id="css">
              <CSSIcon />
              <p>CSS</p>
            </div>
            <div className={styles.static_content}>Techstack</div>
          </div>
        </div>
        <div className={styles.about_content}>
          <h1>About Me</h1>
          <p className="about-intro">
            I’m <strong>Akash Negi</strong>, a frontend developer passionate
            about crafting accessible, fast, and user-friendly web applications.
            With a foundation in Computer Science and a deep love for JavaScript
            frameworks, I thrive on building clean, scalable UI experiences
            using React, Next.js, and TypeScript.
          </p>

          <div className={styles.experience_parent_container}>
            <h2>Experience</h2>
            <div className={styles.experience_content}>
              <h3>Strategywerks</h3>
              <span className={styles.designation}>SDE – I</span>
              <span className={styles.experienceDates}>Apr 2022 – Present</span>
              <ul>
                <li>
                  Developed frontend features using React.js, Next.js, and
                  TypeScript
                </li>
                <li>
                  Built authentication and billing flows with tools like Amazon
                  Cognito and Stripe
                </li>
                <li>
                  Implemented real-time collaboration using WebSockets and
                  Tiptap editor
                </li>
                <li>
                  Created accessible, responsive UIs with strong attention to
                  A11Y compliance
                </li>
                <li>
                  Integrated AI APIs (OpenAI) to enhance user interactions
                </li>
                <li>
                  Worked with Redux Toolkit, Context API, and modular component
                  architecture
                </li>
                <li>
                  Delivered scalable solutions across diverse domains like
                  healthcare, SaaS, and AI writing tools
                </li>
              </ul>
            </div>
            <div className={styles.experience_content}>
              <h3>Tata Consultancy Services (TCS)</h3>
              <span className={styles.designation}>ASE</span>
              <span className={styles.experienceDates}>
                Oct 2020 – Apr 2022
              </span>
              <ul>
                <li>
                  Migrated manual business processes into web-based platforms
                </li>
                <li>
                  Built dynamic UIs using React.js and integrated with .NET MVC
                  backend
                </li>
                <li>
                  Designed and consumed RESTful APIs for seamless data flow
                </li>
                <li>
                  Collaborated with cross-functional teams to improve
                  procurement workflows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
