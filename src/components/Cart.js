import { useEffect, useState } from "react";
import "./Cart.css";
function Cart(props) {
  const list = props.list;
  console.log(list);

  const [addedList, setAddedList] = useState([]);
  useEffect(() => {
    //alert("list changed");
    setAddedList(
      [{name : "YASSINE", unitPrice: 500, quantity:1, price: 0}]
    );
  }, [list]);
  
  return (
    <div className="cart">
      Cart
      <ul>
        {addedList.map((object) => {
          return (
            <li className="purshase">
              <div>{object.name}</div>
              <div>{object.unitPrice}</div>
              <div>{object.price}</div>
              <div>{object.quantity}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Cart;
