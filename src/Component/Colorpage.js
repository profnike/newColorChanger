import {Link} from "react-router-dom"
import React, {useState,useEffect, useRef}  from "react"
import{ChromePicker} from 'react-color'



function Colorpage(){
    let arr=[]
    let backArr=[]
  let ref = useRef();
   console.log(ref.current)

  


  
    useEffect(()=>{
       
        

        if(JSON.parse(localStorage.getItem("user"))!=null){
           
            let oldval =JSON.parse(localStorage.getItem("user")); 
              arr =oldval.arr
             setColorarr(oldval.arr)
              console.log(oldval.arr)
              backArr=oldval.backArr
              setbackArrs(oldval.backArr)
          }
          
          else{
            let user={arr:arr, backArr:backArr} 
            localStorage.setItem("user", JSON.stringify(user))
              //arr=[]
              //backArr=[]
            }



              
              
      
       
       
      
     
     
 },[])




const[vals, setVals]=useState("")
const[inputs, setInputs]=useState("")
const[colorarr, setColorarr]=useState([])
const[color,setColor]=useState("#fff")
const[showColorPicker, setShowColorPicker]=useState(false)
const[back, setBack]=useState({backgroundColor:"#000", margin:"10px"})
const[backArrs, setbackArrs]=useState([])









function gret(){
   if((document.getElementById("input-enter").value==="")||(!showColorPicker)){
        document.getElementById("correct").innerHTML=" Type/Select a color "
   
   }

if(!(document.getElementById("input-enter").value==="")&&(showColorPicker)){ 
       document.getElementById("correct").innerHTML="  "
       
    
    setVals(inputs);
    
   arr=colorarr.slice()
    arr.push(inputs)
    console.log(arr)
    setColorarr(arr.slice())
    console.log(colorarr) 
    
    backArr=backArrs.slice()
    backArr.push(color)
    setbackArrs(backArr.slice())
    console.log(backArr)
    
    let user={arr:arr, backArr:backArr}
    if((localStorage.getItem("user")==null)){
        localStorage.setItem("user", JSON.stringify(user))}
        else{ localStorage.setItem("user", JSON.stringify(user))}
       
    

        //let handler= (event)=>{
           // if(ref.current.contains(event.target)){
               // setShowColorPicker(false)
           // }}
        //}
        //document.getElementById("butn").addEventListener("click",handler)
       // document.getElementById("click",handler)
       // return ()=>{ document.getElementById("click",handler)    
        
        //}  
        

        
   
   }
   setShowColorPicker(false)
   
}
 
return(
    
    <div className="colorpage">
       <div className="enter">
       <label id="enter-label">Enter a color:</label>
<input id="input-enter" type="text" onChange={(e)=>{setInputs(e.target.value)}}/>
</div>
<div className="select">
<label id="select-label">Select color:</label>
<button id="but"  onClick={()=>{setShowColorPicker(true);}}><div className="his"  style={back} >  </div></button><br/>

</div>
{showColorPicker&&(<div >
<ChromePicker  color={color} className="colorpicker"
onChange={updatedColor =>{setColor(updatedColor.hex); setBack({backgroundColor:color})}}/></div>)}



<button id="butn" ref={ref} onClick={(e)=>{ gret()}  }>Add Color</button>
<div id="correct" ></div>


<Link to= {{pathname:"/",
state:vals}} >Go Back to Home Page</Link>
  
  
  
    </div>
    )}

export default Colorpage