import close from "../../assets/close.svg";
export default function FileDisplay({ name, remove, index }) {
  console.log("FIle Display name", name);
  console.log("FIle Display index", index);
  return (
    <div className="file-display-container">
      <img src={close} onClick={() => remove(index)} />
      <label>{name}</label>
    </div>
  );
}
