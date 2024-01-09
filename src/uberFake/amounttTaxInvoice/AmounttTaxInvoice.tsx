import React from "react";
import styles from "./AmounttTaxInvoice.module.css";
import Trowser from "../utils/Trowser/Trowser";
import sign from "../../sign.png";
import { useSelector } from "react-redux";
import { billDataState } from "../sidePanel/sidePanelSlice";
import { formatDate } from "../utils/dateFormat/dateFormat";
import { invoiceNumber } from "../utils/invoiceNumber/invoiceNumber";

const AmounttTaxInvoice = () => {
  const billData = useSelector(
    (state: any) => state?.billData
  ) as billDataState;

  return (
    <Trowser>
      <div className={styles.amountTaxInvoiceContainer}>
        <div className={styles.taxInvoiceHeading}>Tax Invoice</div>
        <div className={styles.taxInvoiceInfo}>
          <p className={styles.taxInfoIndividual}>
            {billData.riderName}
            Pick up address:{" "}
            {billData.startedFromHome
              ? billData.homeAddress
              : billData.officeAddress}
            <br />
          </p>

          <p className={styles.taxInfoIndividual}>
            Invoice issued by Uber India Systems Private Limited on behalf of:
            <br />
            Everest Fleet Private Limited Pune C-105,1,Mhatre Pen Industrial CHS
            Wing B,Senapati Bapat Marg, 400028, Mumbai, Maharashtra, IN-MH India
            <br />
            GSTIN: 27AAFCE2496Q1ZW
          </p>
        </div>
        <div className={styles.taxInvoiceInfo}>
          <p className={styles.taxInfoIndividual}>
            Invoice number: {invoiceNumber} <br />
            Invoice date: {formatDate(billData.date)} <br />
            Place of supply (Name of state): Maharashtra <br />
            HSN Code: 996412 <br />
            Category of services: Passenger Transport Services <br />
            Tax is payable on reverse charge basis: No <br />
          </p>
        </div>
      </div>
      <table className={styles.table}>
        <tr className={styles.horizontalLine}>
          <th>Tax Point Date</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Tax</th>
          <th>
            Tax
            <br /> Amount
          </th>
          <th>
            Net
            <br /> amount
          </th>
        </tr>
        <tr>
          <td>{formatDate(billData.date)}</td>
          <td>Transportation service fare</td>
          <td>1</td>
          <td>SGST/UTGST 2.5%</td>
          <td>&#8377;{(billData.transportationFee * 0.025).toFixed(2)}</td>
          <td>&#8377;{billData.transportationFee}</td>
        </tr>
        <tr className={styles.horizontalLine}>
          <td />
          <td />
          <td />
          <td>CGST 2.5%</td>
          <td>&#8377;{(billData.transportationFee * 0.025).toFixed(2)}</td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total net amount</td>
          <td />
          <td>&#8377;{(billData.transportationFee * 1.05).toFixed(2)}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total CGST 2.5%</td>
          <td />
          <td>&#8377;{(billData.transportationFee * 0.025).toFixed(2)}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total SGST/UTGST 2.5%</td>
          <td />
          <td>&#8377;{(billData.transportationFee * 0.025).toFixed(2)}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total amount payable</td>
          <td />
          <td>&#8377;{(billData.transportationFee * 1.05).toFixed(2)}</td>
        </tr>
      </table>
      <div className={styles.signContainer}>
        <div></div>
        <img src={sign} alt="" className={styles.sign} />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          Details of ECO under GST: <br />
        </div>
        <div className={styles.footer}>
          Uber India Systems Private Limited / Plot No. 17/18, Level 13 Platinum
          Techno Park Sector 30A Vashi, Navi
        </div>
        <div className={styles.footer}>
          Mumbai, Maharashtra / GST: 27AABCU6223H1ZE
        </div>
      </div>
    </Trowser>
  );
};

export default AmounttTaxInvoice;
