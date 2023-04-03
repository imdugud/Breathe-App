import { createSlice } from "@reduxjs/toolkit";
import BREATHE_TYPES from "../../types.json";
import Timer from "../../utils/timeout";
import IntervalTimer from "../../utils/interval";
/*
0: inhale, 1: hold, 2:exhale, 0: hold 
*/

//initial State
const initialState = {
  breathTypes: BREATHE_TYPES,
  currentType: BREATHE_TYPES[0],
  isRunning: false,
  activeTime: 0,
  timer: {},
  meditateStatus: "",
};

export const breatheTypeSlice = createSlice({
  name: "breatheType",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.breathTypes = action.payload;
    },
    setCurrentType: (state, action) => {
      state.currentType = action.payload;
      state.isRunning = false;
    },
    setIsRunning: (state, action) => {
      state.isRunning =
        state.isRunning === action.payload ? !action.payload : action.payload;
      // state.isRunning ? startMeditation() : stopMeditation();
    },
    startMeditation: (state, action) => {
      console.log("countdown");
    },
    pauseMeditation: (state, action) => {},
    stopMeditation: (state, action) => {
      console.log("animation");
    },
    startSequence: (state, action) => {},
  },
});

//selectors
export const typesSelector = (state) => {
  return state.breathType;
};

//actions
export const { setList, setCurrentType, setIsRunning } =
  breatheTypeSlice.actions;

//reducer
export default breatheTypeSlice.reducer;

// Asynchronous thunk action
// export function fetchPosts() {
//   return async (dispatch) => {
//     dispatch(getPosts());

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();

//       dispatch(getPostsSuccess(data));
//     } catch (error) {
//       dispatch(getPostsFailure());
//     }
//   };
// }
