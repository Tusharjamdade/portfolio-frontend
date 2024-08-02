// components/TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ phrases, speed = 1 }:{phrases:string[],speed:number}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      const typingSpeed = isDeleting ? speed / 2 : speed;
      const newText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(newText);

      if (!isDeleting && newText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && newText === '') {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);
    return () => clearInterval(typingInterval);
  }, [text, phraseIndex, isDeleting, phrases, speed]);

  return (
    <div className="text-2xl mt-6 font-bold ">
       &nbsp;{text}
    </div>
  );
};

export default TypingEffect;
