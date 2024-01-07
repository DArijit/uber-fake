import { configureStore } from "@reduxjs/toolkit";
import billDataReducer from "./uberFake/sidePanel/sidePanelSlice";

export default configureStore({
  reducer: { billData: billDataReducer  },
});
