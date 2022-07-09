export default function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:"inherit",color:"black", backgroundColor:"black"}}
        onClick={onClick}
      />
    );
  }