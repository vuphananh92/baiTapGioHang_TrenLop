import logo from "./logo.svg";
import "./App.css";
import HeaderFunc from "./components/HeaderFunc";
import HeaderClass from "./components/HeaderClass";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import DemoProps from "./Props/DemoProps";
import DemoQLSP from "./Props/DemoQLSP/DemoQLSP";
import BTGioHangRedux from "./DemoRedux/BTGioHangRedux/BTGioHangRedux";
import GioHangRedux from "./DemoRedux/BTGioHangRedux/GioHangRedux";
import SanPhamRedux from "./DemoRedux/BTGioHangRedux/SanPhamRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderMap  /> */}
      {/* <DemoProps /> */}
      {/* <DemoQLSP /> */}
      <BTGioHangRedux />
    </div>
  );
}

export default App;
