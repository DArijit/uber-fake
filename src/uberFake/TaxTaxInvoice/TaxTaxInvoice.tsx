import React from "react";
import Trowser from "../utils/Trowser/Trowser";
import styles from "./TaxTaxInvoice.module.css";
import sign from "../../sign.png";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { billDataState } from "../sidePanel/sidePanelSlice";
import { formatDate } from "../utils/dateFormat/dateFormat";

const TaxTaxInvoice = () => {
  const billData = useSelector(
    (state: any) => state?.billData
  ) as billDataState;

  const qrCodeData = `Uber's GSTIN: 06AABCU6223H1ZI; Uber UPI ID: uberindiasystem@hdfcbank; Uber's bank account no.: 57500000195222 and IFSC - HDFC0000060C.; Invoice number: HR231203A7000248; Invoice date: ${formatDate(
    billData.date
  )}; Total invoice value: ₹${(
    (billData.transportationFee / 3.74576271186) * 0.18 +
    billData.bookingFee * 0.18 -
    billData.promotion * 0.18 +
    ((billData.transportationFee / 3.74576271186) * 0.18 +
      billData.bookingFee * 0.18 -
      billData.promotion * 0.18) *
      0.18
  ).toFixed(2)} ; Taxes: IGST: ₹${(
    ((billData.transportationFee / 3.74576271186) * 0.18 +
      billData.bookingFee * 0.18 -
      billData.promotion * 0.18) *
    0.18
  ).toFixed(2)}`;
  return (
    <Trowser>
      {" "}
      <div className={styles.amountTaxInvoiceContainer}>
        <div className={styles.taxInvoiceHeading}>Tax Invoice</div>
        <div className={styles.taxInvoiceInfo}>
          <p className={styles.taxInfoIndividual}>
            {billData.riderName}
            <br />
            {billData.startedFromHome ? billData.homeAddress : billData.officeAddress}
          </p>

          <p className={styles.taxInfoIndividual}></p>
        </div>
        <div className={styles.taxInvoiceInfo}>
          <p className={styles.taxInfoIndividual}></p>
          <p className={styles.taxInfoUber}>Uber</p>
        </div>
        <div className={styles.taxInvoiceInfo}>
          <p className={styles.taxInfoIndividual}>
            Invoice number: HBDDCACA23427838 <br />
            Invoice date: {formatDate(billData.date)} <br />
            Place of supply (Name of state): Maharashtra <br />
            HSN Code: 996412 <br />
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
          <td>Convenience fee</td>
          <td>1</td>
          <td>IGST 18%</td>
          <td>
            ₹{((billData.transportationFee / 3.74576271186) * 0.18).toFixed(2)}
          </td>
          <td>₹{(billData.transportationFee / 3.74576271186).toFixed(2)}</td>
        </tr>
        <tr>
          <td>{formatDate(billData.date)}</td>
          <td>Booking fee</td>
          <td>1</td>
          <td>IGST 18%</td>
          <td>₹{(billData.bookingFee * 0.18).toFixed(2)}</td>
          <td>₹{billData.bookingFee}</td>
        </tr>
        <tr className={styles.horizontalLine}>
          <td>{formatDate(billData.date)}</td>
          <td>Discount</td>
          <td>1</td>
          <td>IGST 18%</td>
          <td>-₹{(billData.promotion * 0.18).toFixed(2)}</td>
          <td>-₹{billData.promotion}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total net amount</td>
          <td>
            ₹
            {(
              (billData.transportationFee / 3.74576271186) * 0.18 +
              billData.bookingFee * 0.18 -
              billData.promotion * 0.18
            ).toFixed(2)}
          </td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total IGST 18%</td>
          <td>
            ₹
            {(
              ((billData.transportationFee / 3.74576271186) * 0.18 +
                billData.bookingFee * 0.18 -
                billData.promotion * 0.18) *
              0.18
            ).toFixed(2)}
          </td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>Total amount payable</td>
          <td>
            ₹
            {(
              (billData.transportationFee / 3.74576271186) * 0.18 +
              billData.bookingFee * 0.18 -
              billData.promotion * 0.18 +
              ((billData.transportationFee / 3.74576271186) * 0.18 +
                billData.bookingFee * 0.18 -
                billData.promotion * 0.18) *
                0.18
            ).toFixed(2)}
          </td>
          <td />
        </tr>
      </table>
      <div className={styles.qrCode}>
        <QRCode value={qrCodeData} size={150} />
      </div>
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

export default TaxTaxInvoice;
