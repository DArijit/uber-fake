import { createSlice } from "@reduxjs/toolkit";

export interface billDataState {
  riderName: string;
  date: string;
  homeAddress: string;
  officeAddress: string;
  startedFromHome: boolean;
  startedFromOffice: boolean;
  morningRide: boolean;
  eveningRide: boolean;
  tripCharge: number;
  bookingFee: number;
  promotion: number;
  driverName: string;
  numberPlate: string;
  stCode: number;
}

export const counterSlice = createSlice({
  name: "billData",
  initialState: {
    riderName: "",
    date: "",
    homeAddress: "",
    officeAddress: "",
    startedFromHome: true,
    startedFromOffice: false,
    morningRide: true,
    eveningRide: false,
    tripCharge: 0,
    bookingFee: 2,
    promotion: 0,
    driverName: "",
    numberPlate: "",
    stCode: 31,
  } as billDataState,
  reducers: {
    setRiderName: (state, action) => {
      state.riderName = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setStartFromHome: (state, action) => {
      state.startedFromHome = action.payload;
    },
    setStartFromOffice: (state, action) => {
      state.startedFromOffice = action.payload;
    },
    setHomeAddress: (state, action) => {
      state.homeAddress = action.payload;
    },
    setOfficeAddress: (state, action) => {
      state.officeAddress = action.payload;
    },
    setMorningRide: (state, action) => {
      state.morningRide = action.payload;
    },
    setEveningRide: (state, action) => {
      state.eveningRide = action.payload;
    },
    setTripCharge: (state, action) => {
      state.tripCharge = action.payload;
    },
    setBookingFee: (state, action) => {
      state.bookingFee = action.payload;
    },
    setPromotion: (state, action) => {
      state.promotion = action.payload;
    },
    setDriverName: (state, action) => {
      state.driverName = action.payload;
    },
    setNumberPlate: (state, action) => {
      state.numberPlate = action.payload;
    },
    setStCode: (state, action) => {
      state.stCode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setRiderName,
  setDate,
  setHomeAddress,
  setOfficeAddress,
  setMorningRide,
  setTripCharge,
  setBookingFee,
  setPromotion,
  setDriverName,
  setNumberPlate,
  setStCode,
  setStartFromHome,
  setStartFromOffice,
  setEveningRide
} = counterSlice.actions;

export default counterSlice.reducer;
