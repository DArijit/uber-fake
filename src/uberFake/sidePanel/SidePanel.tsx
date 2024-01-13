import { useState } from "react";
import styles from "./SidePanel.module.css";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import InputField from "../utils/InputField/InputField";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  setTimeStarted,
} from "../sidePanel/sidePanelSlice";
import DropDown from "../utils/dropDown/DropDown";
import { calculateTimeTake } from "../utils/time/timeDiff";

interface SidePanelProps {
  handlePrint: () => void;
}

const SidePanel = ({ handlePrint }: SidePanelProps) => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [sheKnows, setSheKnows] = useState({
    sheKnowsMorningOffice: false,
    sheKnowsEveningHome: false,
    sheKnowsTimeTravelled: false,
  });
  const [warning, setWarning] = useState({
    isOpen: false,
    message: "",
  });
  const [error, setError] = useState("");

  const handleEditClick = () => setSidePanelOpen(!isSidePanelOpen);

  const billData = useSelector(
    (state: any) => state?.billData,
  ) as billDataState;
  const handlePrintClick = () => {
    if (billData?.date?.length === 0) {
      setError("please set trip date");
      return;
    }
    if (billData?.timeStarted?.length === 0) {
      setError("please set time started");
      return;
    }
    if (billData?.timeEnded?.length === 0) {
      setError("please set time ended");
      return;
    }
    if (billData?.driverName?.length === 0) {
      setError("please enter driver's name");
      return;
    }
    if (
      billData.startedFromHome &&
      billData.eveningRide &&
      !sheKnows.sheKnowsEveningHome
    ) {
      setWarning({
        isOpen: true,
        message:
          "you choosed an evening time but you started from home, did you start from home?",
      });
      return;
    }
    if (
      billData.startedFromOffice &&
      billData.morningRide &&
      !sheKnows.sheKnowsMorningOffice
    ) {
      setWarning({
        isOpen: true,
        message:
          "you choosed a morning time and but you started from office, did you start from office?",
      });
      return;
    }
    if (
      calculateTimeTake(billData.timeStarted, billData.timeEnded) > 60 &&
      !sheKnows.sheKnowsTimeTravelled
    ) {
      setWarning({
        isOpen: true,
        message: `your total time travel is ${calculateTimeTake(
          billData.timeStarted,
          billData.timeEnded,
        )} mins, did you travelled that long?`,
      });
      return;
    }
    handlePrint();
  };

  return (
    <>
      <Dialog
        open={warning.isOpen}
        onClose={() =>
          setWarning({
            isOpen: false,
            message: "",
          })
        }
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"You did something wrong"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{warning.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() =>
              setWarning({
                isOpen: false,
                message: "",
              })
            }
          >
            Let me check again
          </Button>
          <Button
            onClick={() => {
              setWarning({
                isOpen: false,
                message: "",
              });
              if (billData.startedFromHome && billData.eveningRide) {
                setSheKnows({
                  sheKnowsMorningOffice: false,
                  sheKnowsEveningHome: true,
                  sheKnowsTimeTravelled: false,
                });
                return;
              }
              if (billData.startedFromOffice && billData.morningRide) {
                setSheKnows({
                  sheKnowsMorningOffice: true,
                  sheKnowsEveningHome: false,
                  sheKnowsTimeTravelled: false,
                });
                return;
              }
              if (
                calculateTimeTake(billData.timeStarted, billData.timeEnded) > 60
              ) {
                setSheKnows({
                  sheKnowsMorningOffice: false,
                  sheKnowsEveningHome: false,
                  sheKnowsTimeTravelled: true,
                });
                return;
              }
            }}
            autoFocus
          >
            I know what I am doing
          </Button>
        </DialogActions>
      </Dialog>
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
                  inputName="Started from Office"
                  inputType="checkbox"
                  changeHandler={setStartFromOffice}
                  value={billData.startedFromOffice}
                />
                <DropDown
                  inputName="Started from Home"
                  menuItems={[
                    `53M5+QF7, Swagat Nagar Rd, Mahesh Nagar, New Mankapur, Nagpur,
    Maharashtra 440016, India`,
                    `Creative Homes, Green Villa-3, Shriram sq, Gorewada, Katol Road, Nagpur-440013`,
                  ]}
                  changeHandler={setHomeAddress}
                  default={
                    "Creative Homes, Green Villa-3, Shriram sq, Gorewada, Katol Road, Nagpur-440013"
                  }
                  value={billData.homeAddress}
                />
                <InputField
                  inputName="Office address"
                  inputType="string"
                  changeHandler={setOfficeAddress}
                  value={billData.officeAddress}
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
                {error.length > 0 ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  ""
                )}
              </Table>
              <div className={styles.printButtonWrapper}>
                <div className={styles.Button}>
                  <Button variant="contained" onClick={handleEditClick}>
                    Close
                  </Button>
                </div>
                <div className={styles.Button}>
                  <Button variant="contained" onClick={handlePrintClick}>
                    Print
                  </Button>
                </div>
              </div>
            </TableContainer>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SidePanel;
