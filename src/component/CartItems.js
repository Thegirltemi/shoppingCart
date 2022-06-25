import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { decrease, increase, remove } from "../redux/feature/cartSlice";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="grid grid-cols-3 pl-4 pt-5">
        <div className=" flex">
          <img src={img} alt={title} className="w-[100px] mb-2" />
          <h5>{title}</h5>
        </div>
        <div className="pt-8">
          <h5>${price}</h5>

          <div className="flex pt-5">
            <DeleteIcon className="text-red-700" onClick = {()=> dispatch (remove(id) )} />
            <div className="flex ">
              <ArrowLeftIcon onClick = {()=> dispatch (decrease(id))}/>
              <p>{amount}</p>
              <ArrowRightIcon onClick = {()=> dispatch (increase(id) )}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
