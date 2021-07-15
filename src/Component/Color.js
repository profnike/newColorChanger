import {Link} from "react-router-dom"
import react, {useState}  from "react"



function Change(){
   const[view, setView]=useState("yellow")
   
  
  let user={arr:[], backArr:[]} 
   if((localStorage.getItem("user")==null)){
    localStorage.setItem("user", JSON.stringify(user))}
    let users =JSON.parse(localStorage.getItem("user"));
    //
   let userViews={view:view}
    localStorage.setItem("userView", JSON.stringify(userViews))
    

    function setI(index){
        
        let ind=index
        setView("red")
        console.log(ind)
        let usercolors ={ ind:ind}
    localStorage.setItem("usercolor", JSON.stringify(usercolors))
    }

   
return(
    <div>
     <div className="first-half">
<h2 id="head">Welcome to the color Factory</h2>
<Link to= "/colorpage" id="addcolor">Add a color</Link>
</div>  

<div className="second-half">
<h2>Please Select a Color</h2>

<div className="colorDisplay" >

       {users.arr.map((value,index)=>{
        return <div key={index} className="colorVal" > 
          <Link to= "/test"  onClick={()=>{setI(index)}}>
           <p >{value }</p> 
            </Link>
            
            </div>
   
})} 
</div>
</div>
    </div>
    )}

export default Change