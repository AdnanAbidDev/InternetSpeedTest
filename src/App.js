import "./App.css";

import Speedometer from "./components/speedometer";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import Charts from "./components/Chart/chart";
import { useState, useEffect } from "react";
import { BsDownload, BsUpload } from "react-icons/bs";
import { MdNetworkPing } from "react-icons/md";

function App() {
  const [showSpeedometers, setShowSpeedometers] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [size, setSize] = useState(420);
  const [fontScale, setFontScale] = useState(1);
  const [needleLength, setNeedleLength] = useState(125);
  const [headingSpace, setHeadingSpace] = useState(165);
  const [unitSpace, setUnitSpace] = useState(165);
  const handleButtonClick = () => {
    setShowSpeedometers(true);
    setShowChart(true);
    setShowButton(false);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setSize(240);
      setFontScale(1.5);
      setNeedleLength(78);
      setHeadingSpace(90);
      setUnitSpace(110);
    } else {
      setSize(420);
      setFontScale(1);
      setNeedleLength(125);
      setHeadingSpace(165);
      setUnitSpace(200);
    }
  };
  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <Navbar />
      {showButton && (
        <div className="button-container">
          <button className="toggle-button" onClick={handleButtonClick}>
            Go
          </button>
        </div>
      )}
      {showSpeedometers && (
        <div className="speedometer-container">
          <div className="speedometer-wrapper-download">
            <Speedometer
              width={size}
              height={size}
              title="Download"
              value={30}
              color="#30e4a3"
              shadowColor="#eafcf6"
              fontSizeScale={fontScale}
              needleLength={needleLength}
              headingSpace={headingSpace}
              unitSpace={unitSpace}
            />
          </div>
          <div className="speedometer-wrapper-upload">
            <Speedometer
              width={size}
              height={size}
              title="Upload"
              value={50}
              color="#b23be2"
              shadowColor="#f5e8fb"
              fontSizeScale={fontScale}
              needleLength={needleLength}
              headingSpace={headingSpace}
              unitSpace={unitSpace}
            />
          </div>
          <div className="speedometer-wrapper-ping">
            <Speedometer
              width={size}
              height={size}
              title="Ping"
              value={50}
              color="#e5ac43"
              shadowColor="#fcf7ec"
              fontSizeScale={fontScale}
              needleLength={needleLength}
              headingSpace={headingSpace}
              unitSpace={unitSpace}
            />
          </div>
        </div>
      )}
      {showChart && (
        <div className="chart-heading-container">
          <div className="headings-charts">
            <div className="heading-chart-icons download-icon">
              <BsDownload />
              &nbsp;<span style={{ fontWeight: "500" }}>Download</span>
            </div>
            <div className="heading-chart-icons upload-icon">
              <BsUpload />
              &nbsp;<span style={{ fontWeight: "500" }}>Upload</span>
            </div>
            <div className="heading-chart-icons ping-icon">
              <MdNetworkPing />
              &nbsp;<span style={{ fontWeight: "500" }}>Ping</span>
            </div>
          </div>
          <Charts />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
// YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm
