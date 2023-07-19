import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.scss";
import Style from "./Style/Style";
import Size from "./Size/Size";
import { SortButton } from "./SortButton/Sortbutton";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <SortButton />
        <Category handleChange={handleChange} />
        <Style handleChange={handleChange} />
        <Size handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
