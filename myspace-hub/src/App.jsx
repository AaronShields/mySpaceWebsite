import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Ticker from "./components/Ticker";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Ticker text="Two birds ++ one stone o :P" />
    <div className="layout">
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
    </div>
  );
}
