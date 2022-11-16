
//import logo from './logo.svg';
import Filter from "./components/Filter";
import "./App.css";
import Article from "./components/Article";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
// Contact formulaire /footer / navbar /kelmet shopping card/lien about us --->wiki  
function App() {
  const data = [
    { name: "TV", unitPrice: 800 },
    { name: "Iphone-14 ", unitPrice: 2000 },
    { name: "gaming-laptop", unitPrice: 3000 },
    {name: "Switch", unitPrice: 500}
  ];
  
  const [list,setList]=useState([])
  const [cartData,setCartData]=useState([])
  useEffect(()=>{
    const copy= data.map((a)=>{
      return {
        name: a.name,
        unitPrice: a.unitPrice,
        quantity: 0,
        price: a.unitPrice
      }
    })
    setList(copy)
    
  },[]
  )

  console.log(list)
  function filterList(){
    const newList= data.filter(a=>{return a.unitPrice >= 2000})
    setList(newList)
  }
  function resetList(){
    setList(data)
  }
  function addToCart(){
    console.log("ADDING TO CART ")
  }
  function  removeFromCart(){

    console.log("REMOVED FROM CART !!!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-Bar">
          <a href="#"> Telephonie et tablette</a>      
          <a href="#"> Appareils Gaming </a>
          <input id="searching" placeholder="Search" type="search"></input>
        </div>
          <Cart list={cartData}/>
          
        <h1> Shopping card </h1>

        <Filter activate={filterList} disable={resetList} />
        {list.map((article, index)=> <Article key={index} addToCart={addToCart} removeFromCart={removeFromCart} articleProp={article}/>)}

      </header>
     
      <Footer/>
    </div>
  );
}

export default App;
