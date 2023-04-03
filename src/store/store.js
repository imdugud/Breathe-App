import { configureStore } from "@reduxjs/toolkit";
import breatheTypeReducer from "./breathe-types/breathe-type.slice";
export default configureStore({
  reducer: {
    breathType: breatheTypeReducer,
  },
});
