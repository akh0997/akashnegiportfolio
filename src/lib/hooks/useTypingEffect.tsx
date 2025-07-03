import { useEffect, useState } from "react";
import { DEVELOPER_TEXT, TECH_STACK_TEXT } from "../constant/constant";

export const useTypingEffect = () => {
  const [typingText1, setTypingText1] = useState("");
  const [typingText2, setTypingText2] = useState("");
  const [text1Index, setText1Index] = useState(0);
  const [text2Index, setText2Index] = useState(0);

  useEffect(() => {
    if (text1Index < TECH_STACK_TEXT.length) {
      setTypingText1((prev) => {
        return prev + TECH_STACK_TEXT.charAt(text1Index);
      });
      setTimeout(() => {
        setText1Index((prev) => {
          return prev + 1;
        });
      }, 100);
    }
  }, [text1Index]);

  useEffect(() => {
    if (
      text1Index === TECH_STACK_TEXT.length &&
      text2Index < DEVELOPER_TEXT.length
    ) {
      setTypingText2((prev) => {
        return prev + DEVELOPER_TEXT.charAt(text2Index);
      });
      setTimeout(() => {
        setText2Index((prev) => {
          return prev + 1;
        });
      }, 100);
    }
  }, [text1Index, text2Index]);

  return [typingText1, typingText2];
};
