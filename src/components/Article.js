
import { useState } from "react";

function Article(props) {
    const [message,setMessage]=useState(false);
    const name = props.articleProp.name;
  
    //const product= {name: "TV" ,unitPrices:800}
    const [quantity, setQuantity] = useState(props.articleProp.quantity);
    let unitPrice = props.articleProp.unitPrice;
    const [price, setPrice] = useState(0);
    function minus() {
      props.removeFromCart()
      if (quantity >= 1) {
        setQuantity(quantity - 1);
        setPrice(price - unitPrice);
      }
      if (message){
        setMessage(false)
      }
      //quantity -=1
    }
  
    function plus() {
      const newObject = {name: name, unitPrice: unitPrice,  quantity: 1, price : unitPrice}
      props.addToCart(newObject)
        if (price +unitPrice <=5000){
            setPrice(price + unitPrice);
            setQuantity(quantity + 1);
        }
        else{
            setMessage(true);
        }
      
    }
    return (
      <div className="card">
        <h3> {name}</h3>
        <h4> Price {price} dt </h4>
        <small>Unit price : {unitPrice} dt</small>
        <p> Quantity {quantity}</p>
        { message ?  <p>you can't sum is  to 5000</p> : <p>Add more</p>  
        } 
        <div className="quantity-buttoms">
          <button id="minus" onClick={minus}>
            {" "}
            -{" "}
          </button>
          <button id="plus" onClick={plus} disabled={message}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  }
  export default Article