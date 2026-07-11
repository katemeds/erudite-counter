import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import './Tooltip.scss'

export function Tooltip({ content, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const instance = tippy(ref.current, {
      content,
      placement: "top",
      arrow: false,
      theme: "game",
    });

    return () => {
      instance.destroy();
    };
  }, [content]);

  return <span ref={ref}>{children}</span>;
}
