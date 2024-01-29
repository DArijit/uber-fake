import { createSlice } from "@reduxjs/toolkit";

export interface billDataState {
  riderName: string;
  date: string;
  homeAddress: string;
  officeAddress: string;
  startedFromHome: boolean;
  startedFromOffice: boolean;
  morningRide: boolean;
  afternoonRide: boolean;
  eveningRide: boolean;
  transportationFee: number;
  bookingFee: number;
  promotion: number;
  driverName: string;
  numberPlate: string;
  stCode: number;
  kilometer: number;
  timeEnded: string;
  timeStarted: string;
}
const getTimePeriod = (timeString: string) => {
  const [hours] = timeString.split(":");
  const hour = parseInt(hours, 10);

  if (hour >= 0 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 16) {
    return "afternoon";
  } else {
    return "evening";
  }
};

const generateRandomString = () => {
  const getRandomCharacter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  const prefix = getRandomCharacter() + getRandomCharacter();
  const randomPart = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const randomString = prefix + randomPart;

  return randomString;
};

const getRandomNumber = () => {
  const possibleNumbers = [30, 31, 32, 34, 36, 40, 27, 49];
  const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
  const randomNumber = possibleNumbers[randomIndex];
  return randomNumber;
};

const randomTransasportationFee = (): number => {
  const min = 350.0;
  const max = 500.0;
  const num = Math.random() * (max - min) + min;
  return +num.toFixed(2);
};

export const counterSlice = createSlice({
  name: "billData",
  initialState: {
    riderName: "vaibhavi",
    date: "",
    homeAddress: `53M5+QF7, Swagat Nagar Rd, Mahesh Nagar, New Mankapur, Nagpur,
    Maharashtra 440013, India`,
    officeAddress: `6th Floor, VIPL Building, IT Park Rd, Subhash Nagar, Trimurtee Nagar, Nagpur, Maharashtra 440022, India`,
    startedFromHome: true,
    startedFromOffice: false,
    morningRide: true,
    afternoonRide: false,
    eveningRide: false,
    transportationFee: randomTransasportationFee(),
    bookingFee: 2,
    promotion: 23,
    driverName: "",
    numberPlate: generateRandomString(),
    stCode: getRandomNumber(),
    kilometer: 22,
    timeEnded: "",
    timeStarted: "",
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
      state.startedFromOffice = !action.payload;
    },
    setStartFromOffice: (state, action) => {
      state.startedFromOffice = action.payload;
      state.startedFromHome = !action.payload;
    },
    setHomeAddress: (state, action) => {
      state.homeAddress = action.payload;
    },
    setOfficeAddress: (state, action) => {
      state.officeAddress = action.payload;
    },
    setMorningRide: (state, action) => {
      state.morningRide = action.payload;
      state.eveningRide = !action.payload;
    },
    setEveningRide: (state, action) => {
      state.eveningRide = action.payload;
      state.morningRide = !action.payload;
    },
    setTransportationFee: (state, action) => {
      state.transportationFee = action.payload;
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
    setKilometer: (state, action) => {
      state.kilometer = action.payload;
    },
    setTimeEnded: (state, action) => {
      state.timeEnded = action.payload;
    },
    setTimeStarted: (state, action) => {
      state.timeStarted = action.payload;
      if (getTimePeriod(action.payload) === "morning") {
        state.morningRide = true;
        state.eveningRide = false;
        state.afternoonRide = false;
      }

      if (getTimePeriod(action.payload) === "evening") {
        state.morningRide = false;
        state.eveningRide = true;
        state.afternoonRide = false;
      }

      if (getTimePeriod(action.payload) === "afternoon") {
        state.morningRide = false;
        state.eveningRide = false;
        state.afternoonRide = true;
      }
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
} = counterSlice.actions;

export default counterSlice.reducer;
