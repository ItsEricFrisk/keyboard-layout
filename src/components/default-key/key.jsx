import "./key.scss";
import { useEffect, useState } from "react";

export default function Key({
  name,
  imageName,
  specClassName,
  classNames,
  triggerKey,
}) {
  const [keyDown, setKeyDown] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        triggerKey &&
        e.key.toLowerCase() === triggerKey.toLowerCase() &&
        triggerKey
      ) {
        setKeyDown(true);
      }
    };

    const handleKeyUp = (e) => {
      if (
        triggerKey &&
        e.key.toLowerCase() === triggerKey.toLowerCase() &&
        triggerKey
      ) {
        setKeyDown(false);
        // console.log(name);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerKey]);

  // Logga för att se vilka knappar som blir undefined
  // console.log(name);

  return (
    <div
      className={`${classNames} ${keyDown ? "toggle-light" : ""} `}
      tabIndex={0}
      // onKeyDown={onKeyDown}
    >
      <div className="container__inner">
        <p className="container__name">{name}</p>
        <img src={imageName} alt="" className={specClassName} />
      </div>
    </div>
  );
}
