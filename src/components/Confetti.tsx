import { useEffect } from "react";
import confetti from "canvas-confetti";

const fireConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#6c5ce7", "#a29bfe", "#fd79a8", "#ffeaa7", "#55efc4"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#6c5ce7", "#a29bfe", "#fd79a8", "#ffeaa7", "#55efc4"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

const Confetti = () => {
  useEffect(() => {
    fireConfetti();
  }, []);

  return null;
};

export default Confetti;
