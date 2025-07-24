import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const MyComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Data Analyst'],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true, // Enables looping of the animation
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
};

export default MyComponent;
