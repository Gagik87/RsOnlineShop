import "./Style.scss";
import Input from "../../Components/Input";

function Style({ handleChange }) {
  return (
    <div className="StyleContainer">
      <div className="sezon4">
        <p>Стиль</p>
      </div>
      <div className="ttt4">
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>Повседневный</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Весна—лето" name="test" />
          <p>Деловой</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Демисезон" name="test" />
          <p>Коктейльный</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>На свадьбу</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>На выпускной</p>
        </div>
      </div>
      <a className="styleA" href="#">
        Смотреть все
      </a>
    </div>
  );
}

export default Style;
