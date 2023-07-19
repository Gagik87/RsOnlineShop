import "./Category.scss";
import Input from "../../Components/Input";

function Category({ handleChange }) {
  return (
    <div className="CategoryContainer">
      <div className="sezon">
        <p>Сезон</p>
      </div>
      <div className="ttt">
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>Осень—зима</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Весна—лето" name="test" />
          <p>Весна—лето</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Демисезон" name="test" />
          <p>Демисезон</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
