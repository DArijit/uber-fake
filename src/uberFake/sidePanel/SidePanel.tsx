import { useState } from "react";
import styles from "./SidePanel.module.css";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import InputField from "../utils/InputField/InputField";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { billDataState } from "./sidePanelSlice";
import {
  setRiderName,
  setDate,
  setHomeAddress,
  setOfficeAddress,
  setMorningRide,
  setTripCharge,
  setBookingFee,
  setPromotion,
  setDriverName,
  setNumberPlate,
  setStCode,
  setStartFromHome,
  setStartFromOffice,
  setEveningRide,
} from "../sidePanel/sidePanelSlice";

const SidePanel = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const handleEditClick = () => setSidePanelOpen(!isSidePanelOpen);
  const billData = useSelector((state: any) => state?.billData) as billDataState;

  return (
    <div className={styles.sidePanelContainer}>
      <div className={styles.sidePanelIcon} onClick={handleEditClick}>
        {!isSidePanelOpen ? " Click me to Edit" : "Click me to Close"}
      </div>
      {isSidePanelOpen ? (
        <div className={styles.sidePanelWrapper}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <InputField
                inputName="Name"
                inputType="string"
                changeHandler={setRiderName}
              />
              <InputField
                inputName="Date"
                inputType="date"
                changeHandler={setDate}
              />
              <InputField
                inputName="Started from Home"
                inputType="checkbox"
                changeHandler={setStartFromHome}
              />
              <InputField
                inputName="Home address"
                inputType="string"
                changeHandler={setHomeAddress}
              />
              <InputField
                inputName="Started from Office"
                inputType="checkbox"
                changeHandler={setStartFromOffice}
              />
              <InputField
                inputName="Office address"
                inputType="string"
                changeHandler={setOfficeAddress}
              />
              <InputField
                inputName="Is this a morning ride"
                inputType="checkbox"
                changeHandler={setMorningRide}
              />
              <InputField
                inputName="Is this an evening ride"
                inputType="checkbox"
                changeHandler={setEveningRide}
              />
              <InputField
                inputName="Trip Charge"
                inputType="number"
                changeHandler={setTripCharge}
              />
              <InputField
                inputName="Booking Fee"
                inputType="number"
                changeHandler={setBookingFee}
              />
              <InputField
                inputName="Promotion"
                inputType="number"
                changeHandler={setPromotion}
              />
              <InputField
                inputName="Driver's name"
                inputType="string"
                changeHandler={setDriverName}
              />
              <InputField
                inputName="Number Plate"
                inputType="number"
                changeHandler={setNumberPlate}
              />
              <InputField
                inputName="Number Plate State Code"
                inputType="number"
                changeHandler={setStCode}
              />
            </Table>
            <div className={styles.printButtonWrapper}>
              <div className={styles.Button}>
                <Button variant="contained" onClick={handleEditClick}>
                  Close
                </Button>
              </div>
              <div className={styles.Button}>
                <Button variant="contained">Print</Button>
              </div>
            </div>
          </TableContainer>
        </div>
      ) : null}
    </div>
  );
};

export default SidePanel;
