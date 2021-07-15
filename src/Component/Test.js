import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"


function Test(){

    useEffect(()=>{
       
       
           
           setStyling({backgroundColor:users.backArr[usercolor.ind]})
        
    },[])
    const[styling, setStyling]=useState({backgroundColor:"red"})
    let userviews =JSON.parse(localStorage.getItem("userView"));
    let users =JSON.parse(localStorage.getItem("user"));
    let usercolor =JSON.parse(localStorage.getItem("usercolor"));
    function news()
    {setStyling({backgroundColor:"yellow"})}
return(
    <div className="newBody" style={styling}  >
        <h1 >This is color {users.arr[usercolor.ind]} with Hex {users.backArr[usercolor.ind]}</h1>
        <Link to= "/" style={{fontSize:"30px"}}>Go Back</Link>
    </div>

)
}
export default Test