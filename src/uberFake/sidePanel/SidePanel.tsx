import React, { useState } from "react";
import styles from "./SidePanel.module.css";

const SidePanel = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const handleEditClick = () => setSidePanelOpen(!isSidePanelOpen);

  return (
    <div className={styles.sidePanelContainer}>
      <div className={styles.sidePanelIcon} onClick={handleEditClick}>
        {!isSidePanelOpen ? " Click me to Edit" : "Click me to Close"}
      </div>
      <div className={styles.sidePanelWrapper}>
        <div className={styles.inputContainer}>
          <div className={styles.inputHeading}>Name</div>
          <input type="string" className={styles.inputField} />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
