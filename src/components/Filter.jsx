import { useState } from "react"

function Filter(props){
    const activate= props.activate
    const disable = props.disable
    let [showExpensive,setShowExpensive]=useState(false)  

    function handleClick(){
        if (showExpensive){
            disable()
        }
        else{
            activate()
        }
        setShowExpensive(!showExpensive) 
        
    }
return(
    <div>
        <button onClick={handleClick}>{showExpensive?"Hide" :"Show"} expensive purshases</button >

    </div>
    )


}
export default Filter


