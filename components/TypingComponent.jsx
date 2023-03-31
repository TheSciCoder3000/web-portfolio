import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingComponent({ strings, typeSpeed, backDelay, loop, className }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      shuffle: true,
      backDelay,
      loop,
      smartBackspace: false,
    });

    return () => typed.destroy();
  }, []);
  return <span className={className} ref={el}></span>;
}

TypingComponent.defaultProps = {
  typeSpeed: 10,
  backDelay: 1750,
  loop: true,
};

export default TypingComponent;
