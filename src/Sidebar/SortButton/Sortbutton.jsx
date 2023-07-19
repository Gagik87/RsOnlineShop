import "./SortButton.scss";
import { useState } from "react";

export const SortButton = () => {
  const [menuActive, setActive] = useState(false);
  return (
    <div className="SortContainer">
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
  );
};
