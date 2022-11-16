import "./Form.css"
import { useState } from "react"
function Form() {
    let [edit,setEdit] = useState(false)    
    let data={
        name:"",
        numero:"",
        mail:""

    }
    function handleChange(event, arg){
        data[arg]= event.target.value
        setEdit(true)
        
        
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(data)
       
    }

  return (

    <form>
        <div>
            
            {
                edit?"ediiting":"empty"
            }
        </div>
      <div>
        <label> Full Name </label>
        <input className="inputs" placeholder="Name" type="text" onChange={(e)=> {handleChange(e,"name")}}/>
      </div>

      <div>
        <label> Numero </label>
        <input className="inputs" placeholder="Name" type="tel" onChange={(e)=> {handleChange(e,"numero")}}/>
      </div>
      <div>
        <label>Adresse mail </label>

        <input className="inputs" placeholder="Email" type="email" onChange={(e)=> {handleChange(e,"mail")}}/>
      </div>
      <div>
        <button id= "submit" type="submit" onClick={handleSubmit}> Submit your informations </button>
        <button id= "cancel" type="cancel" > Cancel </button>
      </div>
    </form>
  );
}
export default Form;
