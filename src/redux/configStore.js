import { combineReducers, createStore } from "redux";
import GioHangRedux from "../DemoRedux/BTGioHangRedux/GioHangRedux";

const stateDefault = {
  gioHang: [
    { maSP: 1, tenSP: "Iphone", gia: 1000, hinhAnh: ".img/applePhone.jpg" },
  ],
};

const rootReducer = combineReducers({
  gioHangReducer: (state = stateDefault, action) => {
    return { ...state };
  },

  // state theo từng nghiệp vụ
});

export const store = createStore(rootReducer);
