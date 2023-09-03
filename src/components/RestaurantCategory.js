import ItemList from "./ItemList"
import React,{useState} from "react";
const RestaurantCategory = ({resCategory})=>{
    console.log(resCategory);
    const [showItem,setitem]=useState(false)
    var[expandCollapse,setExpandCollapse] = useState('v')
    const handleClick = () =>{
        setitem(!showItem)
        setExpandCollapse('^')
    }
    return(
        <>
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <span className="font-bold text-lg">{resCategory.title}({resCategory.itemCards.length})</span>
            <span>{showItem? expandCollapse ='^':expandCollapse ='v' }</span>
           </div>
           
          { showItem  && <ItemList item ={resCategory?.itemCards}></ItemList>}
          
        </div>
        {/* header */}
        
        {/* accodin body */}
       
        </>
    )
}

export default RestaurantCategory