import React, { ReactNode } from "react";
import styles from "./Trowser.module.css";

interface TrowserProps {
    children: ReactNode
}

const Trowser = ({ children }: TrowserProps) => {
  return <div className={styles.a4Trowser}>{children}</div>;
};

export default Trowser;
