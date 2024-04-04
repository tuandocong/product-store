import classes from "./ItemCart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useState } from "react";
const ItemCart = (props) => {
  const total = props.data.price * props.data.quantity;
  const [quantityValue, setQuantityValue] = useState(props.data.quantity);
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch({ type: "DELETE_CART", payload: { id: props.data.id } });
  };

  const quantityChangeHandler = (e) => {
    if (Number(e.target.value) === 0) {
      dispatch({ type: "DELETE_CART", payload: { id: props.data.id } });
    } else if (e.target.value > 0) {
      setQuantityValue(e.target.value);
      dispatch({
        type: "UPDATE_CART",
        payload: { id: props.data.id, quantity: Number(e.target.value) },
      });
    }
  };
  return (
    <div>
      <div
        className="row align-items-center justify-content-between"
        style={{ marginTop: "15px" }}
      >
        <div className="col-2">
          <img src={props.data.img} alt={"this is a img"} width={"100%"} />
        </div>

        <div className={`col-3 ${classes.product}`}> {props.data.name}</div>
        <div className={`col ${classes.price}`}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(props.data.price)}
        </div>
        <div className="col">
          <input
            type="number"
            value={quantityValue}
            onChange={quantityChangeHandler}
            className={classes.quantity}
          ></input>
        </div>
        <div className={`col ${classes.price}`}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(total)}
        </div>
        <div className="col">
          <button className={classes.icon} onClick={deleteItemHandler}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;
