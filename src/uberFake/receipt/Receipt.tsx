import React from "react";
import styles from "./Receipt.module.css";
import cash from "./../../Cash.png";
import Trowser from "../utils/Trowser/Trowser";
import { useSelector } from "react-redux";
import { billDataState } from "../sidePanel/sidePanelSlice";
import { formatDate } from "../utils/dateFormat/dateFormat";
import { calculateTimeTake } from "../utils/time/timeDiff";

const Receipt = () => {
  const billData = useSelector(
    (state: any) => state?.billData,
  ) as billDataState;

  const rideSalutetion = () => {
    if (billData.morningRide) {
      return "morning";
    }
    if (billData.eveningRide) {
      return "evening";
    }
    return "afternoon";
  };
  return (
    <Trowser>
      <div className={styles.headerContainer}>
        <h1 className={styles.heroHeading}>Uber</h1>
        <p className={styles.heroDate}>{formatDate(billData.date)}</p>
      </div>
      <div className={styles.salutationContainer}>
        <h2 className={styles.salutationText}>
          Here's your receipt for your ride, {billData.riderName}
        </h2>
        <p className={styles.salutationText2}>
          We hope you enjoyed your ride this {rideSalutetion()}.
        </p>
      </div>
      <div>
        <div className={styles.totalContainer}>
          <h3 className={styles.totalHeading}>Total</h3>
          <p className={styles.totalAmt}>
            <span>
              &#8377;{" "}
              {(
                billData.transportationFee * 1.05 +
                ((billData.transportationFee / 3.74576271186) * 0.18 +
                  billData.bookingFee * 0.18 -
                  billData.promotion * 0.18 +
                  ((billData.transportationFee / 3.74576271186) * 0.18 +
                    billData.bookingFee * 0.18 -
                    billData.promotion * 0.18) *
                    0.18) +
                billData.bookingFee -
                billData.promotion
              ).toFixed(2)}
            </span>
          </p>
        </div>
        <div className={styles.subtotalsAndTripChargeContainer}>
          <div className={styles.totalTripContainer}>
            <h3 className={styles.totalTripHeading}>Trip Charge</h3>
            <p className={styles.totalTripAmt}>
              <span>
                &#8377;
                {(
                  billData.transportationFee * 1.05 +
                  ((billData.transportationFee / 3.74576271186) * 0.18 +
                    billData.bookingFee * 0.18 -
                    billData.promotion * 0.18 +
                    ((billData.transportationFee / 3.74576271186) * 0.18 +
                      billData.bookingFee * 0.18 -
                      billData.promotion * 0.18) *
                      0.18)
                ).toFixed(2)}
              </span>
            </p>
          </div>
          <div className={styles.subtotalMainContainer}>
            <div className={styles.subtotalContainer}>
              <h3 className={styles.subtotalHeading}>Subtotal</h3>
              <p className={styles.subtotalAmt}>
                <span>
                  &#8377;
                  {(
                    billData.transportationFee * 1.05 +
                    ((billData.transportationFee / 3.74576271186) * 0.18 +
                      billData.bookingFee * 0.18 -
                      billData.promotion * 0.18 +
                      ((billData.transportationFee / 3.74576271186) * 0.18 +
                        billData.bookingFee * 0.18 -
                        billData.promotion * 0.18) *
                        0.18)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
            <div className={styles.bookingFeeContainer}>
              <h3 className={styles.bookingFeeHeading}>Booking Fee</h3>
              <p className={styles.bookingFeeAmt}>
                <span>&#8377;{billData.bookingFee}</span>
              </p>
            </div>
            <div className={styles.promotionContainer}>
              <h3 className={styles.promotionHeading}>Promotion</h3>
              <p className={styles.promotionAmt}>
                <span>-&#8377;{billData.promotion}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paymentsContainer}>
        <h3 className={styles.paymentsHeading}>Payments</h3>
      </div>
      <div className={styles.paymentsSectionContainer}>
        <p>
          <img src={cash} className={styles.paymentLogo} alt="" />
          <div className={styles.paymentInfo}>
            <span className={styles.paymentLogoName}>Cash</span>
            <span className={styles.paymentDate}>
              {billData.date} {billData.timeEnded}
            </span>
          </div>
        </p>
        <p className={styles.totalAmt}>
          <span>
            &#8377;{" "}
            {(
              billData.transportationFee * 1.05 +
              ((billData.transportationFee / 3.74576271186) * 0.18 +
                billData.bookingFee * 0.18 -
                billData.promotion * 0.18 +
                ((billData.transportationFee / 3.74576271186) * 0.18 +
                  billData.bookingFee * 0.18 -
                  billData.promotion * 0.18) *
                  0.18) +
              billData.bookingFee -
              billData.promotion
            ).toFixed(2)}
          </span>
        </p>
      </div>
      <div className={styles.paymentInfoContainer}>
        <p className={styles.paymentInfoDetails}>
          <a
            href="https://riders.uber.com/trips/618c09e3-1098-4c7b-bca1-b16b4f7c74c3"
            className={styles.anchorTag}
            target="_blank"
            rel="noreferrer"
          >
            Visit the trip page
          </a>{" "}
          for more information, including invoices (where available)
        </p>

        <p className={styles.paymentInfoDetails}>
          The total of ₹{" "}
          {(
            billData.transportationFee * 1.05 +
            ((billData.transportationFee / 3.74576271186) * 0.18 +
              billData.bookingFee * 0.18 -
              billData.promotion * 0.18 +
              ((billData.transportationFee / 3.74576271186) * 0.18 +
                billData.bookingFee * 0.18 -
                billData.promotion * 0.18) *
                0.18) +
            billData.bookingFee -
            billData.promotion
          ).toFixed(2)}{" "}
          has a GST of ₹
          {(
            (billData.transportationFee / 3.74576271186) * 0.18 +
            billData.bookingFee * 0.18 -
            billData.promotion * 0.18 +
            ((billData.transportationFee / 3.74576271186) * 0.18 +
              billData.bookingFee * 0.18 -
              billData.promotion * 0.18) *
              0.18
          ).toFixed(2)}{" "}
          included.
        </p>
      </div>
      <div className={styles.receiptFooter}>
        <p className={styles.driverName}>You rode with {billData.driverName}</p>
        <p className={styles.driverLicense}>
          License Plate: {`MH${billData.stCode}${billData.numberPlate}`}
        </p>
        <div className={styles.tripDetailsContainer}>
          <p className={styles.skuTier}>Uber Go</p>
          <p className={styles.tripDetails}>
            {billData.kilometer} kilometers |{" "}
            {calculateTimeTake(billData.timeStarted, billData.timeEnded)} min(s)
          </p>
        </div>
        <div className={styles.mapTripContainer}>
          <div className={styles.mapSVG}>
            <svg height="8" width="8" className={styles.tripDots1}>
              <circle cx="4" cy="4" r="50" fill="black" />
            </svg>
            <div className={styles.tripLine}></div>
            <svg height="8" width="8" className={styles.tripDots2}>
              <circle cx="4" cy="4" r="50" fill="black" />
            </svg>
          </div>
          <div className={styles.mapStringsContainer}>
            <>
              <p>
                <span>{billData.timeStarted}</span>
                <span className={styles.address}>
                  {" "}
                  |{" "}
                  {billData.startedFromHome
                    ? billData.homeAddress
                    : billData.officeAddress}
                </span>
              </p>
              <p>
                <span>{billData.timeEnded}</span>
                <span className={styles.address}>
                  {" "}
                  |{" "}
                  {!billData.startedFromHome
                    ? billData.homeAddress
                    : billData.officeAddress}
                </span>
              </p>
            </>
          </div>
        </div>
      </div>
      <p className={styles.finalNote}>
        Fares are inclusive of GST. Please download the tax invoice from the
        trip detail page for a full tax breakdown.
      </p>
    </Trowser>
  );
};

export default Receipt;
