import React from "react";
import styles from "./InputField.module.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Checkbox, Input } from "@mui/material";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface InputFieldProps {
  inputName: string;
  inputType: string;
  changeHandler: ActionCreatorWithPayload<any>;
  value: string | number | boolean;
}

const InputField = ({
  inputName,
  inputType,
  changeHandler,
  value,
}: InputFieldProps) => {
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const isChecked = (e.target as HTMLInputElement).checked;
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
          {inputType !== "checkbox" ? (
            <Input
              type={inputType}
              onChange={handleChange}
              placeholder={value as string}
            />
          ) : (
            <Checkbox checked={!!value || false} onChange={handleChange} />
          )}
        </TableCell>
        <TableCell align="right" className={styles.value}>
          {value}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default InputField;
