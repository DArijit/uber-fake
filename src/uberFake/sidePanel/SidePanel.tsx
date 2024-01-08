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
  setTransportationFee,
  setBookingFee,
  setPromotion,
  setDriverName,
  setNumberPlate,
  setStCode,
  setStartFromHome,
  setStartFromOffice,
  setEveningRide,
  setKilometer,
  setTimeEnded,
  setTimeStarted
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
                value={billData.riderName}
              />
              <InputField
                inputName="Date"
                inputType="date"
                changeHandler={setDate}
                value={billData.date}
              />
              <InputField
                inputName="Kilometers"
                inputType="number"
                changeHandler={setKilometer}
                value={billData.kilometer}
              />
              <InputField
                inputName="Time started"
                inputType="time"
                changeHandler={setTimeStarted}
                value={billData.timeStarted}
              />
               <InputField
                inputName="Time ended"
                inputType="time"
                changeHandler={setTimeEnded}
                value={billData.timeEnded}
              />
              <InputField
                inputName="Started from Home"
                inputType="checkbox"
                changeHandler={setStartFromHome}
                value={billData.startedFromHome}
              />
              <InputField
                inputName="Home address"
                inputType="string"
                changeHandler={setHomeAddress}
                value={billData.homeAddress}
              />
              <InputField
                inputName="Started from Office"
                inputType="checkbox"
                changeHandler={setStartFromOffice}
                value={billData.startedFromOffice}
              />
              <InputField
                inputName="Office address"
                inputType="string"
                changeHandler={setOfficeAddress}
                value={billData.officeAddress}
              />
              <InputField
                inputName="Is this a morning ride"
                inputType="checkbox"
                changeHandler={setMorningRide}
                value={billData.morningRide}
              />
              <InputField
                inputName="Is this an evening ride"
                inputType="checkbox"
                changeHandler={setEveningRide}
                value={billData.eveningRide}
              />
              <InputField
                inputName="Transportation Fee"
                inputType="number"
                changeHandler={setTransportationFee}
                value={billData.transportationFee}
              />
              <InputField
                inputName="Booking Fee"
                inputType="number"
                changeHandler={setBookingFee}
                value={billData.bookingFee}
              />
              <InputField
                inputName="Promotion"
                inputType="number"
                changeHandler={setPromotion}
                value={billData.promotion}
              />
              <InputField
                inputName="Driver's name"
                inputType="string"
                changeHandler={setDriverName}
                value={billData.driverName}
              />
              <InputField
                inputName="Number Plate"
                inputType="number"
                changeHandler={setNumberPlate}
                value={billData.numberPlate}
              />
              <InputField
                inputName="Number Plate State Code"
                inputType="number"
                changeHandler={setStCode}
                value={billData.stCode}
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
