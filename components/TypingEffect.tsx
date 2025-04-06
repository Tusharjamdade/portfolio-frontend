// // components/TypingEffect.js
// import React, { useState, useEffect } from 'react';

// const TypingEffect = ({ phrases, speed = 1 }:{phrases:string[],speed:number}) => {
//   const [text, setText] = useState('');
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentPhrase = phrases[phraseIndex];
//       const typingSpeed = isDeleting ? speed / 2 : speed;
//       const newText = isDeleting
//         ? currentPhrase.substring(0, text.length - 1)
//         : currentPhrase.substring(0, text.length + 1);

//       setText(newText);

//       if (!isDeleting && newText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && newText === '') {
//         setIsDeleting(false);
//         setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//       }
//     };

//     const typingInterval = setInterval(handleTyping, speed);
//     return () => clearInterval(typingInterval);
//   }, [text, phraseIndex, isDeleting, phrases, speed]);

//   return (
//     <div className="text-2xl mt-6 font-bold ">
//        &nbsp;{text}
//     </div>
//   );
// };

// export default TypingEffect;

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  phrases: string[];
  speed?: number; // typing speed in ms
}

const TypingEffect: React.FC<TypingEffectProps> = ({ phrases, speed = 150 }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[phraseIndex];

    const updateText = () => {
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      // If done typing and not deleting, pause before deleting
      if (!isDeleting && updatedText === currentPhrase) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
      // If done deleting, move to next phrase
      else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(updateText, isDeleting ? speed / 2 : speed);
      }
    };

    timeout = setTimeout(updateText, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, speed]);

  return (
    <div className="text-2xl mt-6 font-bold">
      &nbsp;{text}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
