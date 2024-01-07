import { useState } from "react";
import styles from "./SidePanel.module.css";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import InputField from "../utils/InputField/InputField";

const SidePanel = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const handleEditClick = () => setSidePanelOpen(!isSidePanelOpen);

  return (
    <div className={styles.sidePanelContainer}>
      <div className={styles.sidePanelIcon} onClick={handleEditClick}>
        {!isSidePanelOpen ? " Click me to Edit" : "Click me to Close"}
      </div>
      {isSidePanelOpen ? (
        <div className={styles.sidePanelWrapper}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <InputField inputName="Name" inputType="string" />
              <InputField inputName="Date" inputType="date" />
              <InputField inputName="Started from Home" inputType="checkbox" />
              <InputField inputName="Home address" inputType="string" />
              <InputField
                inputName="Started from Office"
                inputType="checkbox"
              />
              <InputField inputName="Office address" inputType="string" />
              <InputField inputName="Trip Charge" inputType="number" />
              <InputField inputName="Booking Fee" inputType="number" />
              <InputField inputName="Promotion" inputType="number" />
              <InputField inputName="Driver's name" inputType="string" />
              <InputField inputName="Number Plate" inputType="number" />
              <InputField
                inputName="Number Plate State Code"
                inputType="number"
              />
            </Table>
          </TableContainer>
        </div>
      ) : (
       null
      )}
    </div>
  );
};

export default SidePanel;
