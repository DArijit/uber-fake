import AmounttTaxInvoice from "./amounttTaxInvoice/AmounttTaxInvoice";
import TaxTaxInvoice from "./TaxTaxInvoice/TaxTaxInvoice";
import styles from "./UberFake.module.css";
import Receipt from "./receipt/Receipt";
import SidePanel from "./sidePanel/SidePanel";

const UberFake = () => {
  const handlePrint = () => {
    window.print();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidePanel}>
        <SidePanel handlePrint={handlePrint} />
      </div>
      <Receipt />
      <AmounttTaxInvoice />
      <TaxTaxInvoice />
    </div>
  );
};

export default UberFake;
