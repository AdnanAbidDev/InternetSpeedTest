import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useState, useEffect } from "react";
const data = [
  {
    name: "",
    download: 4000,
    upload: 2400,
    ping: 2400,
  },
  {
    name: "",
    download: 3000,
    upload: 1398,
    ping: 2210,
  },
  {
    name: "",
    download: 2000,
    upload: 9800,
    ping: 2290,
  },
  {
    name: "",
    download: 2780,
    upload: 3908,
    ping: 2000,
  },
  {
    name: "",
    download: 1890,
    upload: 4800,
    ping: 2181,
  },
  {
    name: "",
    download: 2390,
    upload: 3800,
    ping: 2500,
  },
  {
    name: "",
    download: 3490,
    upload: 4300,
    ping: 2100,
  },
];

export default function Charts() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(150);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (isMobile) {
      setWidth(350);
      setHeight(150);
    } else {
      setWidth(1200);
      setHeight(150);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 50,
      }}
    >
      <CartesianGrid vertical={false} horizontal={false} />
      <XAxis hide={true} />
      <YAxis hide={true} />

      <Area
        type="monotone"
        dataKey="download"
        stackId="1"
        stroke="#30e4a3"
        fill="#30e4a3"
      />
      <Area
        type="monotone"
        dataKey="upload"
        stackId="1"
        stroke="#b23be2"
        fill="#b23be2"
      />
      <Area
        type="monotone"
        dataKey="ping"
        stackId="1"
        stroke="#e5ac43"
        fill="#e5ac43"
      />
      {/* <Label value="Download" offset={200} position="right" /> */}
    </AreaChart>
  );
}
