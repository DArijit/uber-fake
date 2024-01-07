import React from "react";
import styles from "./Receipt.module.css";
import amex from "./../../amex-svgrepo-com.svg";
import Trowser from "../utils/Trowser/Trowser";

const Receipt = () => {
  return (
    <Trowser>
      <div className={styles.headerContainer}>
        <h1 className={styles.heroHeading}>Uber</h1>
        <p className={styles.heroDate}>December 11, 2023</p>
      </div>
      <div className={styles.salutationContainer}>
        <h2 className={styles.salutationText}>
          Here's your receipt for your ride, Arijit
        </h2>
        <p className={styles.salutationText2}>
          We hope you enjoyed your ride this morning.
        </p>
      </div>
      <div>
        <div className={styles.totalContainer}>
          <h3 className={styles.totalHeading}>Total</h3>
          <p className={styles.totalAmt}>
            <span>&#8377;101.76</span>
          </p>
        </div>
        <div className={styles.subtotalsAndTripChargeContainer}>
          <div className={styles.totalTripContainer}>
            <h3 className={styles.totalTripHeading}>Trip Charge</h3>
            <p className={styles.totalTripAmt}>
              <span>&#8377;126.70</span>
            </p>
          </div>
          <div className={styles.subtotalMainContainer}>
            <div className={styles.subtotalContainer}>
              <h3 className={styles.subtotalHeading}>Subtotal</h3>
              <p className={styles.subtotalAmt}>
                <span>&#8377;126.70</span>
              </p>
            </div>
            <div className={styles.bookingFeeContainer}>
              <h3 className={styles.bookingFeeHeading}>Booking Fee</h3>
              <p className={styles.bookingFeeAmt}>
                <span>&#8377;0.50</span>
              </p>
            </div>
            <div className={styles.promotionContainer}>
              <h3 className={styles.promotionHeading}>Promotion</h3>
              <p className={styles.promotionAmt}>
                <span>-&#8377;25.44</span>
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
          <img src={amex} className={styles.paymentLogo} alt="" />
          <div className={styles.paymentInfo}>
            <span className={styles.paymentLogoName}>amex ****1003</span>
            <span className={styles.paymentDate}>12/11/23 4:56PM</span>
          </div>
        </p>
        <p className={styles.totalAmt}>
          <span>&#8377;101.76</span>
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
          The total of ₹101.76 has a GST of ₹5.30 included.
        </p>
      </div>
      <div className={styles.receiptFooter}>
        <p className={styles.driverName}>You rode with AMAR</p>
        <p className={styles.driverLicense}>License Plate: MH12UM4916</p>
        <div className={styles.tripDetailsContainer}>
          <p className={styles.skuTier}>Uber Go</p>
          <p>5.09 kilometers | 15 min</p>
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
            <p>
              <span>10:27</span>
              <span>
                {" "}
                | 53M5+QF7, Swagat Nagar Rd, Mahesh Nagar, New Mankapur, Nagpur,
                Maharashtra 440016, India
              </span>
            </p>
            <p>
              <span>10:51</span>
              <span>
                {" "}
                | 6th Floor, VIPL Building, IT Park Rd, Subhash Nagar, Trimurtee
                Nagar, Nagpur, Maharashtra 440022, India
              </span>
            </p>
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
