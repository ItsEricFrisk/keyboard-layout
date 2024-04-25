import { useEffect, useState } from "react";
import "./App.scss";
import Key from "./components/default-key/key";
import SpecKey from "./components/specific-key/spec-key";

function App() {
  const [onButtonToggle, setOnButtonToggle] = useState(false);
  const [backgroundLightToggle, setBackgroundLightToggle] = useState(false);
  const [textfield, setTextfield] = useState("Write something");

  const handleLightClick = () => {
    setOnButtonToggle(!onButtonToggle);
    setBackgroundLightToggle(!backgroundLightToggle);
  };

  useEffect(() => {
    const eventHandler = (e) => {
      setTextfield(e.key);
    };

    const eventHandlerUp = () => {
      setTextfield(" ");
    };

    window.addEventListener("keydown", eventHandler);
    window.addEventListener("keyup", eventHandlerUp);

    return () => {
      window.removeEventListener("keyDown", eventHandler);
      window.removeEventListener("keyup", eventHandlerUp);
    };
  }, []);

  return (
    <>
      <p className="textfield">{textfield}</p>
      <img src="src/images/click-here-text.png" alt="" className="clickText" />
      <div
        className={`onButton ${onButtonToggle ? "on" : "off"}`}
        onClick={handleLightClick}
      ></div>
      <section className="keyboard-layout-outside">
        <section className="keyboard">
          {/* esc and top-row */}
          <Key
            name={"esc"}
            triggerKey={"Escape"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F1"}
            triggerKey={"F1"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F2"}
            triggerKey={"F2"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F3"}
            triggerKey={"F3"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F4"}
            triggerKey={"F4"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F5"}
            triggerKey={"F5"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F6"}
            triggerKey={"F6"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F7"}
            triggerKey={"F7"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F8"}
            triggerKey={"F8"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F9"}
            triggerKey={"F9"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F10"}
            triggerKey={"F10"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F11"}
            triggerKey={"F11"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F12"}
            triggerKey={"F12"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            // Dead key
            name={"prt scr"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"del"}
            triggerKey={"Delete"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            imageName={"./src/images/Light On.png"}
            specClassName={"lightOn"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          {/* Numeric row */}
          <Key
            name={"§"}
            triggerKey={"§"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"1"}
            triggerKey={"1"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"2"}
            triggerKey={"2"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"3"}
            triggerKey={"3"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"4"}
            triggerKey={"4"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"5"}
            triggerKey={"5"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"6"}
            triggerKey={"6"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"7"}
            triggerKey={"7"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"8"}
            triggerKey={"8"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"9"}
            triggerKey={"9"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"0"}
            triggerKey={"0"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"+ ?"}
            triggerKey={"+"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"´ `"}
            triggerKey={"Dead"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <SpecKey
            triggerKey={"Backspace"}
            imageName={"src/images/backarrow.png"}
            specClassName={`backKey ${backgroundLightToggle ? "on" : "off"}`}
            imgClassName={"backArrow"}
            specInnerClassName={"backInnerKey"}
          />
          <Key
            name={"page up"}
            triggerKey={"pageUp"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          {/* qwerty */}
          <SpecKey
            name={"tab"}
            triggerKey={"Tab"}
            specClassName={`tabKey ${backgroundLightToggle ? "on" : "off"}`}
            specInnerClassName={"tabInnerKey"}
          />
          <Key
            name={"Q"}
            triggerKey={"Q"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
            // onKeyDown={onKeyDown}
          />
          <Key
            name={"W"}
            triggerKey={"W"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"E"}
            triggerKey={"E"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"R"}
            triggerKey={"R"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"T"}
            triggerKey={"T"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"Y"}
            triggerKey={"Y"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"U"}
            triggerKey={"U"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"I"}
            triggerKey={"I"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"O"}
            triggerKey={"0"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"P"}
            triggerKey={"P"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"Å"}
            triggerKey={"Å"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"^ ¨"}
            triggerKey={"Dead"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <SpecKey
            name={"enter"}
            triggerKey={"Enter"}
            specClassName={`enterKey ${backgroundLightToggle ? "on" : "off"}`}
            specInnerClassName={"enterInnerKey"}
          />
          <Key
            name={"page down"}
            triggerKey={"pageDown"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          {/* ASD */}
          <SpecKey
            name={"caps"}
            triggerKey={"Caps"}
            specClassName={`capsKey ${backgroundLightToggle ? "on" : "off"}`}
            specInnerClassName={"capsInnerKey"}
          />
          <Key
            name={"A"}
            triggerKey={"A"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"S"}
            triggerKey={"S"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"D"}
            triggerKey={"D"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"F"}
            triggerKey={"F"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"G"}
            triggerKey={"G"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"H"}
            triggerKey={"H"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"J"}
            triggerKey={"J"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"K"}
            triggerKey={"K"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"L"}
            triggerKey={"L"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"Ö"}
            triggerKey={"Ö"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"Ä"}
            triggerKey={"Ä"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"' ¨"}
            triggerKey={"'"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"home"}
            triggerKey={"Home"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          {/* ZXC */}
          <Key
            name={"shift"}
            triggerKey={"Shift"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"< > |"}
            triggerKey={"<"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"Z"}
            triggerKey={"Z"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"X"}
            triggerKey={"X"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"C"}
            triggerKey={"C"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"V"}
            triggerKey={"V"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"B"}
            triggerKey={"B"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"N"}
            triggerKey={"N"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"M"}
            triggerKey={"M"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={", ;"}
            triggerKey={","}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={". :"}
            triggerKey={"."}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"- _"}
            triggerKey={"-"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <SpecKey
            name={"shift"}
            triggerKey={"Shift"}
            specClassName={`shiftKey ${backgroundLightToggle ? "on" : "off"}`}
            specInnerClassName={"shiftInnerKey"}
          />
          <Key
            triggerKey={"arrowUp"}
            imageName={"src/images/arrow.png"}
            specClassName={"upArrow"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"end"}
            triggerKey={"End"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          {/* Bottom row */}
          <Key
            name={"control"}
            triggerKey={"Control"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            triggerKey={"Meta"}
            imageName={"src/images/winkey.png"}
            specClassName={"winKey"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"alt"}
            triggerKey={"Alt"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <SpecKey
            name={"space"}
            triggerKey={" "}
            specClassName={`spaceKey ${backgroundLightToggle ? "on" : "off"}`}
            specInnerClassName={"spaceInnerKey"}
          />
          <Key
            name={"alt gr"}
            triggerKey={"AltGraph"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"fn"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            name={"control"}
            triggerKey={"Control"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            triggerKey={"arrowLeft"}
            imageName={"src/images/arrow.png"}
            specClassName={"leftArrow"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            triggerKey={"arrowDown"}
            imageName={"src/images/arrow.png"}
            specClassName={"downArrow"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
          <Key
            triggerKey={"arrowRight"}
            imageName={"src/images/arrow.png"}
            specClassName={"rightArrow"}
            classNames={`container ${backgroundLightToggle ? "on" : "off"}`}
          />
        </section>
      </section>
    </>
  );
}

export default App;
