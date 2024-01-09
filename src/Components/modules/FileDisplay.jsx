import close from "../../assets/close.svg";
export default function FileDisplay({ name, remove }) {
  return (
    <div className="file-display-container">
      <img src={close} onClick={remove} />
      <label>{name}</label>
    </div>
  );
}
