import AmounttTaxInvoice from "./amounttTaxInvoice/AmounttTaxInvoice";
import TaxTaxInvoice from "./TaxTaxInvoice/TaxTaxInvoice";
import styles from "./UberFake.module.css";
import Receipt from "./receipt/Receipt";
import SidePanel from "./sidePanel/SidePanel";

const UberFake = () => {
  const handlePrint = () => {
    window.print(); // Open print dialog and print visible DOM without any changes
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidePanel}>
        <SidePanel handlePrint={handlePrint}/>
      </div>
      <Receipt />
      <AmounttTaxInvoice />
      <TaxTaxInvoice />
      <button onClick={handlePrint} className={styles.printButton}>
        Print
      </button>
    </div>
  );
};

export default UberFake;
