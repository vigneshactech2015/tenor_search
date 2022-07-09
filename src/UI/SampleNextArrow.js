import Slider from "react-slick";

export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"inherit",color:"black", backgroundColor:"black" }}
      onClick={onClick}
    />
  );
}