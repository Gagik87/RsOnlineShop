import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "../../Components/Input";
import "./Price.scss";
import { useState } from "react";
// import { makeStyles } from "@mui/styled-engine-sc";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}
const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <div className="priceText">
          <h2 className="ppp">Цена</h2>
        </div>
        <div className="priceInput">
          <div className="Input1">
            <Input handleChange={handleChange} value={24} name="test2" />
            <p className="lll">0 BYN - 50 BYN</p>
          </div>
          <div className="Input1">
            <Input handleChange={handleChange} value={99} name="test2" />
            <p>50 BYN - 100 BYN</p>
          </div>
          <div className="Input1">
            <Input handleChange={handleChange} value={673} name="test2" />
            <p>100 BYN - 150 BYN</p>
          </div>
          <div className="Input1">
            <Input handleChange={handleChange} value={749} name="test2" />
            <p> OVER - 150 BYN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
