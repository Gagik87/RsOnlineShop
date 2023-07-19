import "./HomePage.scss";
import pants from "../../img/pants.png";
import suits from "../../img/suits.png";
import shirts from "../../img/shirts.png";
import coats from "../../img/coats.png";
import jackets from "../../img/jackets.png";
import ties from "../../img/ties.png";
import bowties from "../../img/bowties.png";
import belts from "../../img/belts.png";
import boxImgOne from "../../img/img (6).png";
import boxImgTwo from "../../img/img (7).png";
import boxImgThree from "../../img/img (8).png";
import boxImgFour from "../../img/img (9).png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import otziv from "../../img/review.png";
import otziv2 from "../../img/review (1).png";
import otziv3 from "../../img/review (2).png";
import otziv4 from "../../img/review (3).png";
import otziv5 from "../../img/review (4).png";
import otziv6 from "../../img/review (5).png";
import Address1 from "../../img/address 1.png";
import Address2 from "../../img/address 2.png";
import Address3 from "../../img/address 1 (1).png";
import Address4 from "../../img/address 2 (1).png";
import FooterLogo from "../../img/Vector (12).png";

export const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="HomeContainer">
      <div className="Home">
        <div className="HomeTitle">
          <div className="HomeContent">
            <div className="HomeFrstText">
              <h1>Качественные</h1>
              <h1>мужские костюмы</h1>
            </div>
          </div>
          <div className="HomeBackground">
            <div className="HomeFrstButton">
              <button>Перейти в каталог</button>
            </div>
          </div>
          <div className="HomeBackText">
            <p>
              Откройте мир стильной
              <br />
              мужской одежды и подберите
              <br />
              элегантный образ в Royal Style
            </p>
          </div>
          <div className="HomeBackText2">
            <p>
              Откройте мир стильной
              <br />
              мужской одежды
              <br />
              и подберите
              <br />
              элегантный образ
              <br />
              в Royal Style
            </p>
          </div>
          <div className="HomeBackText3">
            <p>
              Откройте мир стильной
              <br />
              мужской одежды
              <br />
              и подберите элегантный
              <br />
              образ в Royal Style
            </p>
          </div>
        </div>
        <div className="HomeBackTextContent4">
          <div className="HomeBackTexTitle">
            <div className="HomeFrstText4">
              <h1>Качественные</h1>
              <h1>мужские костюмы</h1>
            </div>
            <div className="HomeBackground4"></div>
            <div className="HomeBackText4">
              <p>
                Откройте мир стильной мужской
                <br />
                одежды и подберите элегантный образ
                <br />
                в Royal Style
              </p>
            </div>
            <div className="HomeFrstButton4">
              <button>Перейти в каталог</button>
            </div>
          </div>
        </div>
        <div className="CategorisContainer">
          <div className="CategorisTitle">
            <div className="Categoris">
              <div className="CategorisContent">
                <div className="CategorisOneImg">
                  <img className="one" src={pants} alt="pants" />
                  <img className="two" src={suits} alt="suits" />
                  <img className="three" src={shirts} alt="shirts" />
                </div>
                <div className="CategorisTwoImg">
                  <img className="four" src={coats} alt="coats" />
                  <img className="fife" src={jackets} alt="jackets" />
                </div>
                <div className="CategorisThreeImg">
                  <img className="six" src={ties} alt="ties" />
                  <img className="seven" src={bowties} alt="bowties" />
                  <img className="eight" src={belts} alt="belts" />
                </div>
                <div className="CategorisOneImgMobile">
                  <img className="oneMobile" src={suits} alt="suits" />
                </div>
                <div className="CategorisTwoImgMobile">
                  <img className="twoMobile" src={pants} alt="pants" />
                  <img className="threeMobile" src={shirts} alt="shirts" />
                </div>
                <div className="CategorisThreeImgMobile">
                  <img className="fourMobile" src={coats} alt="coats" />
                  <img className="fifeMobile" src={jackets} alt="jackets" />
                </div>
                <div className="CategorisFourImgMobileCont">
                  <div className="CategorisFourImgMobile">
                    <img className="sixMobile" src={ties} alt="ties" />
                    <img className="sevenMobile" src={bowties} alt="bowties" />
                    <img className="eightMobile" src={belts} alt="belts" />
                  </div>
                  <div className="CategorisSmallDeviceImgCont">
                    <div className="CategorisSmallDeviceImg">
                      <img className="oneDevice" src={suits} alt="suits" />
                      <img className="twoDevice" src={pants} alt="pants" />
                      <img className="threeDevice" src={shirts} alt="shirts" />
                      <img className="fourDevice" src={coats} alt="coats" />
                      <img className="fifeDevice" src={jackets} alt="jackets" />
                      <img className="sixDevice" src={ties} alt="ties" />
                      <img
                        className="sevenDevice"
                        src={bowties}
                        alt="bowties"
                      />
                      <img className="eightDevice" src={belts} alt="belts" />
                    </div>
                  </div>
                  <div className="BoxContainer">
                    <div className="BoxContainerTitle">
                      <div className="Box">
                        <div className="BoxFrstText">
                          <h1>Cпециальные предложения</h1>
                        </div>
                        <div className="BoxContent">
                          <div className="BoxOne">
                            <img src={boxImgOne} />
                            <p className="v">Костюм-тройка серый</p>
                            <p className="p">PW20319</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">673 BYN</p>
                              <p className="opacity">
                                <del>750 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgTwo} />
                            <p className="v">Брюки с защипами черные</p>
                            <p className="p">AB48762</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">99 BYN</p>
                              <p className="opacity">
                                <del>149 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgThree} />
                            <p className="v">Бабочка черная</p>
                            <p className="p">IK24637</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">24 BYN</p>
                              <p className="opacity">
                                <del>49 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgFour} />
                            <p className="v">Смокинг черный</p>
                            <p className="p">PW20316</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">749 BYN</p>
                              <p className="opacity">
                                <del>849 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                        </div>
                        <div className="BoxContent2">
                          <div className="BoxOne">
                            <img src={boxImgThree} />
                            <p className="v">Бабочка черная</p>
                            <p className="p">IK24637</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">24 BYN</p>
                              <p className="opacity">
                                <del>49 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgFour} />
                            <p className="v">Смокинг черный</p>
                            <p className="p">PW20316</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">749 BYN</p>
                              <p className="opacity">
                                <del>849 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgOne} />
                            <p className="v">Костюм-тройка серый</p>
                            <p className="p">PW20319</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">673 BYN</p>
                              <p className="opacity">
                                <del>750 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgTwo} />
                            <p className="v">Брюки с защипами черные</p>
                            <p className="p">AB48762</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">99 BYN</p>
                              <p className="opacity">
                                <del>149 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                        </div>
                        <div className="BoxContent3">
                          <div className="BoxOne">
                            <img src={boxImgOne} />
                            <p className="v">Костюм-тройка серый</p>
                            <p className="p">PW20319</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">673 BYN</p>
                              <p className="opacity">
                                <del>750 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgTwo} />
                            <p className="v">Брюки с защипами черные</p>
                            <p className="p">AB48762</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">99 BYN</p>
                              <p className="opacity">
                                <del>149 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgThree} />
                            <p className="v">Бабочка черная</p>
                            <p className="p">IK24637</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">24 BYN</p>
                              <p className="opacity">
                                <del>49 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                        </div>
                        <div className="BoxContent3">
                          <div className="BoxOne">
                            <img src={boxImgFour} />
                            <p className="v">Смокинг черный</p>
                            <p className="p">PW20316</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">749 BYN</p>
                              <p className="opacity">
                                <del>849 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgThree} />
                            <p className="v">Бабочка черная</p>
                            <p className="p">IK24637</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">24 BYN</p>
                              <p className="opacity">
                                <del>49 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgFour} />
                            <p className="v">Смокинг черный</p>
                            <p className="p">PW20316</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">749 BYN</p>
                              <p className="opacity">
                                <del>849 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                        </div>
                        <div className="BoxContent4">
                          <div className="BoxOne">
                            <img src={boxImgOne} />
                            <p className="v">Костюм-тройка серый</p>
                            <p className="p">PW20319</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">673 BYN</p>
                              <p className="opacity">
                                <del>750 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgTwo} />
                            <p className="v">Брюки с защипами черные</p>
                            <p className="p">AB48762</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">99 BYN</p>
                              <p className="opacity">
                                <del>149 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                          <div className="BoxOne">
                            <img src={boxImgThree} />
                            <p className="v">Бабочка черная</p>
                            <p className="p">IK24637</p>
                            <div className="RadioOne">
                              <input className="oneRadio" type="radio" />
                              <input className="twoRadio" type="radio" />
                              <input className="threeRadio" type="radio" />
                              <input className="fourRadio" type="radio" />
                            </div>
                            <div className="PriceOne">
                              <p className="red">24 BYN</p>
                              <p className="opacity">
                                <del>49 BYN</del>
                              </p>
                              <button>В корзину</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="BoxContent5">
          <div className="BoxOne">
            <img src={boxImgOne} />
            <p className="v">Костюм-тройка серый</p>
            <p className="p">PW20319</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">673 BYN</p>
              <p className="opacity">
                <del>750 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
          <div className="BoxOne">
            <img src={boxImgTwo} />
            <p className="v">Брюки с защипами черные</p>
            <p className="p">AB48762</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">99 BYN</p>
              <p className="opacity">
                <del>149 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
        <div className="BoxContent5">
          <div className="BoxOne">
            <img src={boxImgThree} />
            <p className="v">Бабочка черная</p>
            <p className="p">IK24637</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">24 BYN</p>
              <p className="opacity">
                <del>49 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
          <div className="BoxOne">
            <img src={boxImgFour} />
            <p className="v">Смокинг черный</p>
            <p className="p">PW20316</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">749 BYN</p>
              <p className="opacity">
                <del>849 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
        <div className="BoxContent5">
          <div className="BoxOne">
            <img src={boxImgThree} />
            <p className="v">Бабочка черная</p>
            <p className="p">IK24637</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">24 BYN</p>
              <p className="opacity">
                <del>49 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
          <div className="BoxOne">
            <img src={boxImgFour} />
            <p className="v">Смокинг черный</p>
            <p className="p">PW20316</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">749 BYN</p>
              <p className="opacity">
                <del>849 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
        <div className="BoxContent5">
          <div className="BoxOne">
            <img src={boxImgOne} />
            <p className="v">Костюм-тройка серый</p>
            <p className="p">PW20319</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">673 BYN</p>
              <p className="opacity">
                <del>750 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
          <div className="BoxOne">
            <img src={boxImgTwo} />
            <p className="v">Брюки с защипами черные</p>
            <p className="p">AB48762</p>
            <div className="RadioOne">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
            <div className="PriceOne">
              <p className="red">99 BYN</p>
              <p className="opacity">
                <del>149 BYN</del>
              </p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
        <div className="BoxContent6Cont">
          <div className="BoxContent6">
            <div className="BoxOne">
              <img src={boxImgOne} />
              <p className="v">Костюм-тройка серый</p>
              <p className="p">PW20319</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">673 BYN</p>
                <p className="opacity">
                  <del>750 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgTwo} />
              <p className="v">Брюки с защипами черные</p>
              <p className="p">AB48762</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">99 BYN</p>
                <p className="opacity">
                  <del>149 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgThree} />
              <p className="v">Бабочка черная</p>
              <p className="p">IK24637</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">24 BYN</p>
                <p className="opacity">
                  <del>49 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgFour} />
              <p className="v">Смокинг черный</p>
              <p className="p">PW20316</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">749 BYN</p>
                <p className="opacity">
                  <del>849 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
          </div>
        </div>
        <div className="BoxContent7Cont">
          <div className="BoxContent7">
            <div className="BoxOne">
              <img src={boxImgThree} />
              <p className="v">Бабочка черная</p>
              <p className="p">IK24637</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">24 BYN</p>
                <p className="opacity">
                  <del>49 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgFour} />
              <p className="v">Смокинг черный</p>
              <p className="p">PW20316</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">749 BYN</p>
                <p className="opacity">
                  <del>849 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgOne} />
              <p className="v">Костюм-тройка серый</p>
              <p className="p">PW20319</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">673 BYN</p>
                <p className="opacity">
                  <del>750 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
            <div className="BoxOne">
              <img src={boxImgTwo} />
              <p className="v">Брюки с защипами черные</p>
              <p className="p">AB48762</p>
              <div className="RadioOne">
                <input className="oneRadio" type="radio" />
                <input className="twoRadio" type="radio" />
                <input className="threeRadio" type="radio" />
                <input className="fourRadio" type="radio" />
              </div>
              <div className="PriceOne">
                <p className="red">99 BYN</p>
                <p className="opacity">
                  <del>149 BYN</del>
                </p>
                <button>В корзину</button>
              </div>
            </div>
          </div>
        </div>
        <div className="CaroselFrstText">
          <h1>Отзывы</h1>
          <a href="#">Мы в Яндекс Картах</a>
        </div>
        <div className="CaroselFrstText2">
          <div className="rrr">
            <a href="#">Смотреть все отзывы</a>
            <a href="#">Мы в Яндекс Картах</a>
          </div>
        </div>
        <div className="CarouselCont">
          <Carousel className="Carousel" responsive={responsive}>
            <div className="sliderImg">
              <img src={otziv} alt="" />
            </div>
            <div className="sliderImg">
              <img src={otziv3} alt="" />
            </div>
            <div className="sliderImg">
              <img src={otziv} alt="" />
            </div>
            <div className="sliderImg">
              <img src={otziv} alt="" />
            </div>
            <div className="sliderImg">
              <img src={otziv3} alt="" />
            </div>
            <div className="sliderImg">
              <img src={otziv} alt="" />
            </div>
          </Carousel>
          <div className="CarouselCont2">
            <Carousel className="Carousel" responsive={responsive}>
              <div className="SliderMob">
                <img src={otziv4} alt="" />
              </div>
              <div className="SliderMob">
                <img src={otziv4} alt="" />
              </div>
              <div className="SliderMob">
                <img src={otziv4} alt="" />
              </div>
            </Carousel>
          </div>
          <div className="CarouselCont3">
            <Carousel className="Carousel" responsive={responsive}>
              <div className="SliderMob2">
                <img src={otziv5} alt="" />
              </div>
              <div className="SliderMob2">
                <img src={otziv6} alt="" />
              </div>
              <div className="SliderMob2">
                <img src={otziv5} alt="" />
              </div>
              <div className="SliderMob2">
                <img src={otziv6} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="EmailSubscribeCont">
        <div className="EmailSubscribeTitle">
          <div className="EmailSubscribe">
            <div className="EmailSubscribeContent">
              <h1>Будьте в курсе</h1>
              <p>Подпишитесь на рассылку, чтоб не пропустить</p>
              <p>новости и специальные предложения и получите</p>
              <p> скидку 10% на первую покупку!</p>
              <div className="SubscribeInput">
                <input type="email" placeholder="Электронная почта" />
                <button>Подписаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContactContainer">
        <div className="ContactTitle">
          <div className="Contact">
            <div className="ContactContent">
              <h1>Контакты</h1>
              <div className="ddd">
                <div className="Addres">
                  <img src={Address1} alt="" />
                  <img src={Address2} alt="" />
                </div>
                <div className="Addres2">
                  <img src={Address1} alt="" />
                </div>
                <div className="Addres3">
                  <img src={Address2} alt="" />
                </div>
                <div className="Addres4">
                  <img src={Address3} alt="" />
                </div>
                <div className="Addres5">
                  <img src={Address4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="FooterContainer">
          <div className="FooterTitle">
            <div className="FooterContant">
              <div className="FooterText">
                <p>Этот сайт не является интернет-магазином,</p>
                <p>а представляет собой интернет-витрину,</p>
                <p>где вы можете ознакомиться с ассортиментом</p>
                <p>товаров и забронировать их.</p>
              </div>
              <div className="FooterBar">
                <a href="#">Каталог</a>
                <a href="#">Отзывы</a>
                <a href="#">Контакты</a>
                <a href="#">Информация для покупателей</a>
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Публичная оферта</a>
              </div>
              <div className="FooterBar2">
                <div className="FooterBarCont1">
                  <a href="#">Каталог</a>
                  <a href="#">Отзывы</a>
                  <a href="#">Контакты</a>
                </div>
                <div className="FooterBarCont1">
                  <a href="#">Информация для покупателей</a>
                  <a href="#">Политика конфиденциальности</a>
                  <a href="#">Публичная оферта</a>
                </div>
              </div>
              <div className="FooterLogo">
                <img src={FooterLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
