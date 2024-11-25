import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [  "I love coding.","I create web magic.","I solve complex problems."],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      startDelay:500,
      loop: true,
      smartBackspace: false 
    };

    const typed = new Typed(typewriterRef.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <div style={{ fontSize:"var(--fs-2)", textAlign: 'left' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span ref={typewriterRef}></span>
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            backgroundColor: 'black',
            marginLeft: '2px',
            animation: 'blink 1s step-end infinite',
          }}
        ></span>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Typewriter;
