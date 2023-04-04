import { useRef, useEffect } from "react";
const Speedometer = ({ ...props }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Calculate the center of the canvas
    const centerX = props.width / 2;
    const centerY = props.height / 2;

    const radius = props.width * 0.35;
    const angleIncrement = ((14 / 9) * Math.PI) / 10; // divide circle into 10 equal parts
    const startAngle = (13 / 18) * Math.PI;
    //Draw the outer circle
    context.beginPath();
    context.arc(
      centerX,
      centerY,
      props.width * 0.4,
      (2 / 3) * Math.PI,
      (7 / 3) * Math.PI
    );
    context.lineWidth = 5;
    context.strokeStyle = "#333";
    context.stroke();

    //draw the array of numbers
    // Add numbers to the circumference of the circle
    context.font = `bold ${14 / props.fontSizeScale}px Poppins`;
    context.fillStyle = "#333";
    for (let i = 0; i <= 10; i++) {
      const angle = startAngle + i * angleIncrement;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      context.fillText(i * 10, x - props.numberWidth, y + 5);
    }
    // Draw the inner circle with colored shadow
    context.beginPath();
    context.imageSmoothingEnabled = true;
    context.webkitImageSmoothingEnabled = true;
    context.arc(centerX, centerY, props.width * 0.25, 0 * Math.PI, 2 * Math.PI);
    context.lineWidth = 1;
    context.strokeStyle = props.color;
    context.stroke();

    // Draw an additional smaller circle with a blur effect applied to it
    context.beginPath();
    context.arc(centerX, centerY, props.width * 0.24, 0 * Math.PI, 2 * Math.PI);
    context.shadowBlur = 6;
    context.shadowColor = props.color;
    context.strokeStyle = props.shadowColor;
    context.stroke();

    // Add heading text
    context.fillStyle = "#333";
    context.font = `bold ${20 / props.fontSizeScale}px Poppins`;
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
    context.textAlign = "center";
    context.fillText(props.title, centerX, centerY + 40);

    // // Draw the needle based on the current value
    // const needleAngle = startAngle + (props.value / 50) * (7 / 9) * Math.PI;
    // const needleLength = radius * 0.8;
    // const needleX = centerX + needleLength * Math.cos(needleAngle);
    // const needleY = centerY + needleLength * Math.sin(needleAngle);
    // context.beginPath();
    // context.moveTo(centerX, centerY);
    // context.lineTo(needleX, needleY);
    // context.lineWidth = 5;
    // context.lineCap = "round";
    // context.strokeStyle = "#333";
    // context.stroke();

    // context.clearRect(0, 0, props.width, props.height);
    context.translate(props.width / 2, props.height / 2); // center
    context.rotate(1.2 * Math.PI); //position of needle
    context.beginPath();
    context.moveTo(0, -10);
    context.lineTo(props.needleLength, 0);
    context.lineTo(0, 10);
    context.fillStyle = props.color;
    context.fill();
    context.rotate(-2 * Math.PI);
    context.translate(-(props.width / 2), -(props.height / 2));
    context.beginPath();
    context.arc(props.width / 2, props.height / 2, 10, 0, Math.PI * 2);
    context.fillStyle = props.color;
    context.fill();
    context.beginPath();
    context.arc(props.width / 2, props.height / 2, 7, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    // Add speed text
    context.setTransform(1, 0, 0, 1, 0, 0); // reset the canvas transformation
    context.fillStyle = "#333";
    context.font = `500 ${45 / props.fontSizeScale}px Poppins`;
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
    context.fillText(props.value, centerX, centerY + props.headingSpace);
    // Add speed unit text
    context.setTransform(1, 0, 0, 1, 0, 0); // reset the canvas transformation
    context.fillStyle = "#333";
    context.font = `bold ${30 / props.fontSizeScale}px Poppins`;
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
    context.fillText("Mbps", centerX, centerY + props.unitSpace);
  }, [props]);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};
export default Speedometer;
