import classes from "./CartPage.module.css";
import ListItemCart from "../component/ListItemCart";
import CartTotal from "../component/CartTotal";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

const CartPage = () => {
  //lấy data từ redux:
  const totalCart = useSelector((state) => state.cartPage.totalCart);
  const arrItemsCart = useSelector((state) => state.cartPage.arrItems);

  // let totalCart = localStorage.getItem("totalCart")
  //   ? JSON.parse(localStorage.getItem("totalCart"))
  //   : 0;
  // let arrItemsCart = localStorage.getItem("arrItems")
  //   ? JSON.parse(localStorage.getItem("arrItems"))
  //   : [];

  return (
    <div>
      <div className="container">
        <div
          className={`row align-items-center justify-content-between ${classes.header}`}
        >
          <h2 className="col">CART</h2>
          <p className="col">CART</p>
        </div>
        <div className="row">
          <h2 className={classes["text-h2"]}>SHOPPING CART</h2>
        </div>
        <div className="row">
          <div className="col-9">
            <ListItemCart listCart={arrItemsCart} />
          </div>
          <div className="col-3">
            <CartTotal total={totalCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
