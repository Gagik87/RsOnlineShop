import "./Size.scss";
import Input from "../../Components/Input";

function Size({ handleChange }) {
  return (
    <div className="SizeContainer">
      <div className="sezon2">
        <p>Размер</p>
      </div>
      <div className="yyy">
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>44</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Весна—лето" name="test" />
          <p>46</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Демисезон" name="test" />
          <p>48</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>50</p>
        </div>
        <div className="Input1">
          <Input handleChange={handleChange} value="Осень—зима" name="test" />
          <p>52</p>
        </div>
      </div>
      <a className="styleA2" href="#">
        Смотреть все
      </a>
    </div>
  );
}

export default Size;
