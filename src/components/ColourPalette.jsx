import React from "react";
import styles from "./ColourPalette.module.css";

const ColourPalette = (props) => {
  const handleColourSwap = (e) => {
    props.retrieveColour(e.target.name);
  };

  return (
    <div>
      <ul className={styles.colourlist}>
        <li>
          <button
            name="red"
            className={styles.colouritemred}
            onClick={handleColourSwap}
          ></button>
        </li>
        <li>
          <button
            name="green"
            className={styles.colouritemgreen}
            onClick={handleColourSwap}
          ></button>
        </li>
        <li>
          <button
            name="blue"
            className={styles.colouritemblue}
            onClick={handleColourSwap}
          ></button>
        </li>
        <li>
          <button
            name="yellow"
            className={styles.colouritemyellow}
            onClick={handleColourSwap}
          ></button>
        </li>
        <li>
          <button
            name="orange"
            className={styles.colouritemorange}
            onClick={handleColourSwap}
          ></button>
        </li>
        <li>
          <button
            name="pink"
            className={styles.colouritempink}
            onClick={handleColourSwap}
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default ColourPalette;
