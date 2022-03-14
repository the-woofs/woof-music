import "./index.css";

function Avatar(props) {
  const { src, height, width, alt } = props;

  return (
    <img className="Avatar" src={src} height={height} width={width} alt={alt} />
  );
}

export default Avatar;
