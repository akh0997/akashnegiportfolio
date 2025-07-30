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
import Divider from "../Divider/Divider";
import Navbar from "../Navbar/Navbar";
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

      <Navbar />
      <div className={styles.about_container} id="about">
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
            <div className={styles.static_content}>What I Use</div>
          </div>
        </div>
        <div className={styles.about_content}>
          <h1>About Me</h1>
          <p className="about-intro">
            I’m <strong>Akash Negi</strong>, a frontend developer with 3+ years
            of experience building fast, accessible, and user-focused web
            applications. With a B.Tech in Computer Science and expertise in
            React, Next.js, and TypeScript, I enjoy crafting clean, scalable
            interfaces that solve real-world problems.
          </p>

          <p className="about-intro">
            At Strategywerks, I’ve worked on a range of products—from AI-driven
            healthcare tools to collaborative editors and real-time
            chatbots—often integrating tools like OpenAI, Amazon Cognito, and
            Stripe. I focus on writing efficient code, improving performance,
            and creating smooth user experiences.
          </p>

          <p className="about-intro">
            Outside of work, I enjoy learning through platforms like Udemy and
            HackerRank to stay sharp and explore new technologies.
          </p>
        </div>
      </div>

      <Divider />

      <div className={styles.experience_parent_container} id="experience">
        <div className={styles.experience_content}>
          <h1>Experience</h1>
          <div className={styles.experience_content_section}>
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
                Implemented real-time collaboration using WebSockets and Tiptap
                editor
              </li>
              <li>
                Created accessible, responsive UIs with strong attention to A11Y
                compliance
              </li>
              <li>Integrated AI APIs (OpenAI) to enhance user interactions</li>
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
          <div className={styles.experience_content_section}>
            <h3>Tata Consultancy Services (TCS)</h3>
            <span className={styles.designation}>ASE</span>
            <span className={styles.experienceDates}>Oct 2020 – Apr 2022</span>
            <ul>
              <li>
                Migrated manual business processes into web-based platforms
              </li>
              <li>
                Built dynamic UIs using React.js and integrated with .NET MVC
                backend
              </li>
              <li>Designed and consumed RESTful APIs for seamless data flow</li>
              <li>
                Collaborated with cross-functional teams to improve procurement
                workflows
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineContainer}>
          <h3 className={styles.timelineTitle}>Career Timeline</h3>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.dot}>🎓</span>
              <div className={styles.content}>
                <strong>B.Tech – Kurukshetra University</strong>
                <p>2015 – 2019</p>
              </div>
            </li>
            <li>
              <span className={styles.dot}>👨‍💻</span>
              <div className={styles.content}>
                <strong>ASE at TCS</strong>
                <p>Oct 2020 – Apr 2022</p>
              </div>
            </li>
            <li>
              <span className={styles.dot}>🚀</span>
              <div className={styles.content}>
                <strong>SDE-I at Strategywerks</strong>
                <p>Apr 2022 – Present</p>
              </div>
            </li>
            <li>
              <span className={styles.dot}>🏆</span>
              <div className={styles.content}>
                <strong>3x Quarterly Awards</strong>
                <p>2022 – 2024</p>
              </div>
            </li>
            <li>
              <span className={styles.dot}>🤖</span>
              <div className={styles.content}>
                <strong>Worked on AI, Stripe, Cognito tools</strong>
                <p>2023 – Present</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
