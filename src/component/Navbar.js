import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {

  const {totalCount} = useSelector((state)=> state.cart)
  const dispatch = useDispatch


  return (
    <div className="flex justify-between bg-blue-100 p-5">
      <Link to="/">
        <h2 className="text-2xl font-bold cursor-pointer">OnlineStore</h2>
      </Link>
      <Link to="/cart">
        <div className="flex bg-blue-300 p-3 rounded">
          <span className="pr-3">Cart</span>
          <ShoppingCartIcon className="cursor-pointer" />
          <button className="text-red-600">{totalCount}</button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
