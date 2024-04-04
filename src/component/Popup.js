import classes from "./Popup.module.css";
import img from "../img/product_2.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const Popup = (props) => {
  // console.log(props.data);
  const dispatch = useDispatch();

  // default data
  const [data, setData] = useState({
    img1: img,
    name: "Iphone",
    price: 1000000,
    short_desc: "nothing",
  });

  //lấy data
  useEffect(() => {
    if (props.data.length !== 0) {
      setData(props.data);
    }
  }, [props.data]);

  // click X button:
  const hidePopupHandler = () => {
    dispatch({ type: "HIDE_POPUP" });
    console.log("Click hide popup");
  };

  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.popup}>
        <div className={`container ${classes["grid-contain"]}`}>
          <div className="row g-5">
            <div className="col">
              <img
                src={data.img1}
                alt="this is a product"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col">
              <div className={classes.name}>{data.name}</div>
              <div className={classes.price}>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(data.price)}
              </div>
              <div className={classes["short-desc"]}>{data.short_desc}</div>
              <button
                type="button"
                className="btn btn-dark"
                style={{ borderRadius: "0", padding: "7px 40px" }}
              >
                View Detail
              </button>
            </div>
            <button onClick={hidePopupHandler} className={classes["btn-x"]}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
