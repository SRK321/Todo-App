import React from "react";

import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <>
    <tr>
      <td colSpan={4}>
        <p className={styles.Welcome}>Welcome To Our App</p>;
      </td>
    </tr>
  </>
  )
  
};

export default WelcomeMessage;
