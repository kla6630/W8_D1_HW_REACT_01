function ButtonComponent(props) {
  return (
    <button
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
        width: "300px",
        height: "300px",
        border: "solid 20px green",
        margin: "5px",
      }}
    >
      {props.text}
    </button>
  );
}

export default ButtonComponent;
