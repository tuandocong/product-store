import classes from "./CheckoutPage.module.css";
import CheckoutOrder from "../component/CheckoutOrder";
import { useState } from "react";
// import { useSelector } from "react-redux";

//--------------------
const CheckoutPage = () => {
  // -----   lấy data từ Redux   -----
  // const orderList = useSelector((state) => state.cartPage.arrItems);
  // const total = useSelector((state) => state.cartPage.totalCart);

  // -----   lấy data từ localStorage   -----
  let orderList = localStorage.getItem("arrItems")
    ? JSON.parse(localStorage.getItem("arrItems"))
    : [];
  let total = localStorage.getItem("totalCart")
    ? JSON.parse(localStorage.getItem("totalCart"))
    : 0;

  // state chứa giá trị cho các input:
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressInput, setAddressInput] = useState("");

  //cập nhật giá trị input
  const nameChange = (e) => {
    setNameInput(e.target.value);
  };
  const emailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const phoneChange = (e) => {
    setPhoneInput(e.target.value);
  };
  const addressChange = (e) => {
    setAddressInput(e.target.value);
  };

  //click Submit btn:
  const submitHandler = (e) => {
    e.preventDefault();
    setNameInput("");
    setEmailInput("");
    setPhoneInput("");
    setAddressInput("");
    alert("Checkout Success !!!");
  };
  return (
    <div>
      <div className="container">
        <div
          className={`row align-items-center justify-content-between ${classes.header}`}
        >
          <h2 className="col">CHECKOUT</h2>
          <div className={`col ${classes.link}`}>
            <div
              style={{
                display: "inline",
                color: "rgb(40, 40, 40)",
                paddingRight: "5px",
              }}
            >
              HOME/ CART/
            </div>
            CHECK OUT
          </div>
        </div>
        <div className="row">
          <h2 className={classes["text-h2"]}>BILLING DETAILS</h2>
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-7" style={{ textAlign: "left" }}>
            <form className={classes.form} onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="nameInput">FULL NAME:</label>
                <input
                  value={nameInput}
                  onChange={nameChange}
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter Your Full Name Here!"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email:</label>
                <input
                  value={emailInput}
                  onChange={emailChange}
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter Your Email Here!"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="phoneInput">PHONE NUMBER:</label>
                <input
                  value={phoneInput}
                  onChange={phoneChange}
                  type="tel"
                  className="form-control"
                  id="phoneInput"
                  placeholder="Enter Your Phone Number Here!"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="addressInput">ADDRESS:</label>
                <input
                  value={addressInput}
                  onChange={addressChange}
                  type="text"
                  className="form-control"
                  id="addressInput"
                  placeholder="Enter Your Address Here!"
                ></input>
              </div>
              <button>Place order</button>
            </form>
          </div>
          <div className="col-5">
            <CheckoutOrder data={orderList} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
