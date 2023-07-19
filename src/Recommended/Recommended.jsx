import { useState } from "react";
import Button from "../Components/Button";
import "./Recommended.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Catalog } from "../pages/Catalog/Catalog";
import Category from "../Sidebar/Category/Category";
import Input from "../Components/Input";
import Price from "../Sidebar/Price/Price";
const Recommended = ({ handleClick, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };
  const handleFilterClickClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className="recommended-flex">
          <div className="allButton">
            <Button onClickHandler={handleClick} value="" title="Все" />
          </div>
          <Button
            onClickHandler={handleClick}
            value="Костюмы"
            title="Костюмы"
          />
          <Button onClickHandler={handleClick} value="Пальто" title="Пальто" />
          <Button
            onClickHandler={handleClick}
            value="Пиджаки"
            title="Пиджаки"
          />
          <Button
            onClickHandler={handleClick}
            value="Рубашки"
            title="Рубашки"
          />
          <Button onClickHandler={handleClick} value="Брюки" title="Брюки" />
          <Button
            onClickHandler={handleClick}
            value="Галстуки"
            title="Галстуки"
          />
          <Button
            onClickHandler={handleClick}
            value="Бабочки"
            title="Бабочки"
          />
          <Button
            className="cc"
            onClickHandler={handleClick}
            value="Ремни"
            title="Ремни"
          />
        </div>
      </div>
      <div className="SortContainer2">
        <div className="SortTitle">
          <div className="Sort">
            <div className="SortContent">
              <div className="SortButton">
                <select>
                  <option value="Сортировать по">Сортировать по</option>
                  <option value="Сначала дорогие">По новизне</option>
                  <option value="По новизне">Сначала дешевые</option>
                  <option value="Сначала дорогие">Сначала дорогие</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FiltersButtonContainer">
        <div className="FiltersButtonTitle">
          <div className="FiltersButton">
            <div className="FiltersButtonContent">
              <div className="openFilter">
                <button onClick={handleFilterClick} className="openFilter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M10 10H12.5M18.75 10C18.75 9.6717 18.6853 9.34661 18.5597 9.04329C18.4341 8.73998 18.2499 8.46438 18.0178 8.23223C17.7856 8.00009 17.51 7.81594 17.2067 7.6903C16.9034 7.56466 16.5783 7.5 16.25 7.5C15.587 7.5 14.9511 7.76339 14.4822 8.23223C14.0134 8.70107 13.75 9.33696 13.75 10C13.75 10.663 14.0134 11.2989 14.4822 11.7678C14.9511 12.2366 15.587 12.5 16.25 12.5C16.5783 12.5 16.9034 12.4353 17.2067 12.3097C17.51 12.1841 17.7856 11.9999 18.0178 11.7678C18.2499 11.5356 18.4341 11.26 18.5597 10.9567C18.6853 10.6534 18.75 10.3283 18.75 10ZM18.75 10L30 10.0001M30 20H27.5M21.25 20C21.25 19.337 21.5134 18.7011 21.9822 18.2322C22.4511 17.7634 23.087 17.5 23.75 17.5C24.413 17.5 25.0489 17.7634 25.5178 18.2322C25.9866 18.7011 26.25 19.337 26.25 20C26.25 20.663 25.9866 21.2989 25.5178 21.7678C25.0489 22.2366 24.413 22.5 23.75 22.5C23.087 22.5 22.4511 22.2366 21.9822 21.7678C21.5134 21.2989 21.25 20.663 21.25 20ZM21.25 20H10M10 30H12.5M18.75 30C18.75 29.6717 18.6853 29.3466 18.5597 29.0433C18.4341 28.74 18.2499 28.4644 18.0178 28.2322C17.7856 28.0001 17.51 27.8159 17.2067 27.6903C16.9034 27.5647 16.5783 27.5 16.25 27.5C15.587 27.5 14.9511 27.7634 14.4822 28.2322C14.0134 28.7011 13.75 29.337 13.75 30C13.75 30.663 14.0134 31.2989 14.4822 31.7678C14.9511 32.2366 15.587 32.5 16.25 32.5C16.5783 32.5 16.9034 32.4353 17.2067 32.3097C17.51 32.1841 17.7856 31.9999 18.0178 31.7678C18.2499 31.5356 18.4341 31.26 18.5597 30.9567C18.6853 30.6534 18.75 30.3283 18.75 30ZM18.75 30L30 30.0001M7.5 2.5H32.5C35.27 2.5 37.5 4.73 37.5 7.5V32.5C37.5 35.27 35.27 37.5 32.5 37.5H7.5C4.73 37.5 2.5 35.27 2.5 32.5V7.5C2.5 4.73 4.73 2.5 7.5 2.5Z"
                      stroke="#6C6C85"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div className="filter_body">
                  <div className="menuClose">
                    <div className="rrr">
                      <div className="ooo">
                        <p>Фильтры</p>
                        <button onClick={handleFilterClickClose}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <g opacity="0.2">
                              <path
                                d="M25.6183 25.2389L6.7621 6.38272M6.7621 25.2389L25.6183 6.38272"
                                stroke="#24222A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div className="sezon">
                        <p>Сезон</p>
                      </div>
                      <div className="ttt">
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>Осень—зима</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Весна—лето"
                            name="test"
                          />
                          <p>Весна—лето</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Демисезон"
                            name="test"
                          />
                          <p>Демисезон</p>
                        </div>
                      </div>
                      <div className="sezon4">
                        <p>Стиль</p>
                      </div>
                      <div className="ttt4">
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>Повседневный</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Весна—лето"
                            name="test"
                          />
                          <p>Деловой</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Демисезон"
                            name="test"
                          />
                          <p>Коктейльный</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>На свадьбу</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>На выпускной</p>
                        </div>
                      </div>
                      <a className="styleA" href="#">
                        Смотреть все
                      </a>
                      <div className="sezon2">
                        <p>Размер</p>
                      </div>
                      <div className="yyy">
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>44</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Весна—лето"
                            name="test"
                          />
                          <p>46</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Демисезон"
                            name="test"
                          />
                          <p>48</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>50</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value="Осень—зима"
                            name="test"
                          />
                          <p>52</p>
                        </div>
                      </div>
                      <a className="styleA2" href="#">
                        Смотреть все
                      </a>
                      <div className="priceText">
                        <h2 className="ppp">Цена</h2>
                      </div>
                      <div className="priceInput">
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value={24}
                            name="test2"
                          />
                          <p>0 BYN - 50 BYN</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value={99}
                            name="test2"
                          />
                          <p>50 BYN - 100 BYN</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value={673}
                            name="test2"
                          />
                          <p>100 BYN - 150 BYN</p>
                        </div>
                        <div className="Input1">
                          <Input
                            handleChange={handleChange}
                            value={749}
                            name="test2"
                          />
                          <p> OVER - 150 BYN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
