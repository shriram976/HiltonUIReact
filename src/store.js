import { createStore } from "redux";
var SESSION_INFO = sessionStorage.getItem("RoomBookingInfoState");
var GLOBAL_STATE = SESSION_INFO?JSON.parse(SESSION_INFO):{ roomDetails: [{
    selectedFlag: true,
    selectionRequired: false,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }] };

function rootReducer(state, action) {
    state = state || GLOBAL_STATE;
    if (action.type === "SAVE_DATA") {
        state = { roomDetails: action.data.roomDetails };
        sessionStorage.setItem("RoomBookingInfoState", JSON.stringify(state));
    }
    return state;
}
var store = createStore(rootReducer);
export default store;

