import { useState, useCallback, useMemo } from "react";

interface MathCaptcha {
  question: string;
  answer: number;
}

function generateCaptcha(): MathCaptcha {
  const a = Math.floor(Math.random() * 10) + 1; // 1-10
  const b = Math.floor(Math.random() * 10) + 1; // 1-10
  return {
    question: `${a} + ${b}`,
    answer: a + b,
  };
}

export function useMathCaptcha() {
  const [captcha, setCaptcha] = useState<MathCaptcha>(generateCaptcha);

  const refresh = useCallback(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const validate = useCallback(
    (userAnswer: string): boolean => {
      const parsed = parseInt(userAnswer.trim(), 10);
      return !isNaN(parsed) && parsed === captcha.answer;
    },
    [captcha.answer]
  );

  return {
    question: captcha.question,
    validate,
    refresh,
  };
}
