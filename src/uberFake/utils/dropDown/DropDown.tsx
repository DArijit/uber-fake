import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import styles from "./DropDown.module.css";

interface DropDownProps {
  inputName: string;
  menuItems: string[];
  changeHandler: ActionCreatorWithPayload<any>;
  default: string;
  value: string
}

const DropDown = ({inputName, menuItems, changeHandler, value }: DropDownProps) => {
  const dispatch = useDispatch();
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const inputValue = e.target.value;

    dispatch(changeHandler(inputValue));
  };
  return (
    <TableBody>
      <TableRow>
        <TableCell className={styles.value}>{inputName}</TableCell>
        <TableCell align="right" className={styles.value}>
          <FormControl fullWidth className={styles.value}>
            <InputLabel id="demo-simple-select-label">Home Address</InputLabel>
            <Select label="Age" onChange={(e) => handleChange(e)}>
              {menuItems.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="right" className={styles.value}>
          {value}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DropDown;
