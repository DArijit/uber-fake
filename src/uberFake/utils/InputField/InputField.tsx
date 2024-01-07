import React, { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Input } from "@mui/material";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

interface InputFieldProps {
  inputName: string;
  inputType: string;
  changeHandler: ActionCreatorWithPayload<any>;
}

const InputField = ({
  inputName,
  inputType,
  changeHandler,
}: InputFieldProps) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  
  useEffect(()=>{

  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const isChecked = (e.target as HTMLInputElement).checked;
    setValue(inputValue);
    if (inputType === "checkbox") {
      dispatch(changeHandler(isChecked));
      return;
    }
    dispatch(changeHandler(inputValue));
  };

  return (
    <TableBody>
      <TableRow>
        <TableCell className={styles.value}>{inputName}</TableCell>
        <TableCell align="right" className={styles.value}>
          <Input type={inputType} onChange={handleChange} placeholder={value} />
        </TableCell>
        <TableCell align="right" className={styles.value}>
          {value}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default InputField;
