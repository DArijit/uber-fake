import React, { useState } from "react";
import styles from "./InputField.module.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Input } from "@mui/material";

interface InputFieldProps {
  inputName: string;
  inputType: string
}

const InputField = ({inputName, inputType}: InputFieldProps) => {
  const [value, setValue] = useState("");

  return (
    <TableBody>
      <TableRow>
        <TableCell className={styles.value}>{inputName}</TableCell>
        <TableCell align="right" className={styles.value}>
          <Input type={inputType} onChange={(e) => setValue(e.target.value)} />
        </TableCell>
        <TableCell align="right" className={styles.value}>
          {value}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default InputField;
