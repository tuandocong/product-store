import classes from "./Navbav.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  //--------- c1: lay du lieu tu redux
  // const isLogin = useSelector((state) => state.loginPage.isLogin);
  // const userLogin = useSelector((state) => state.loginPage.userLogin);

  //--------- c2: lay du lieu tu localStorage
  let isLogin = false; // trạng thái Login/out
  const userLogin = JSON.parse(localStorage.getItem("curUser"));
  if (
    localStorage.getItem("curUser") &&
    Object.values(userLogin).length !== 0
  ) {
    // console.log(Object.values(curUser).length === 0);    //  kiem tra doi tuong tra ve === {} ?
    isLogin = true;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //hiển thị trạng thái Active phù hợp:
  const isActive = useSelector((state) => state.mainNavbar.isActiveState);

  //khi click vào btn:
  const homeButtonHandler = () => {
    dispatch({ type: "HOME_ACTIVE" });
    navigate("/");
  };
  const shopButtonHandler = () => {
    dispatch({ type: "SHOP_ACTIVE" });
    navigate("/shop");
  };
  const cartButtonHandler = () => {
    dispatch({ type: "CART_ACTIVE" });
    navigate("/cart");
  };
  const loginButtonHandler = () => {
    dispatch({ type: "LOGIN_ACTIVE" });
    navigate("/login");
  };
  const logoutButtonHandler = () => {
    localStorage.setItem("curUser", JSON.stringify({}));
    dispatch({ type: "ON_LOGOUT" });
    dispatch({ type: "LOGIN_ACTIVE" });
    navigate("/login");
  };

  return (
    <div className={classes["context-navbar"]}>
      <div>
        <button
          className={isActive === "home" ? classes.active : ""}
          onClick={homeButtonHandler}
        >
          Home
        </button>
        <button
          className={isActive === "shop" ? classes.active : ""}
          onClick={shopButtonHandler}
        >
          Shop
        </button>
      </div>
      <div className={classes["text-header"]}>BOUTIQUE</div>
      <div>
        <button
          className={isActive === "cart" ? classes.active : ""}
          onClick={cartButtonHandler}
        >
          <FaShoppingCart className={classes.icons} />
          Cart
        </button>
        {!isLogin && (
          <button
            className={isActive === "login" ? classes.active : ""}
            onClick={loginButtonHandler}
          >
            Login
          </button>
        )}
        {isLogin && (
          <div className={classes.user}>
            <FaUserAlt className={classes.icons} />
            {userLogin.name}
          </div>
        )}
        {isLogin && <button onClick={logoutButtonHandler}>(Logout)</button>}
      </div>
    </div>
  );
};
export default Navbar;
