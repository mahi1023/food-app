import ItemList from "./ItemList"
import React,{useState} from "react";
const RestaurantCategory = ({resCategory,showItem,setShowIndex})=>{
    console.log(resCategory);
     const [showItem1,setitem]=useState(showItem)
    var[expandCollapse,setExpandCollapse] = useState('v')
    const handleClick = () =>{
         setitem(!showItem1);
        setShowIndex();
        setExpandCollapse('^')
    }
    return(
        <>
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <span className="font-bold text-lg">{resCategory.title}({resCategory.itemCards.length})</span>
            <span>{showItem1? expandCollapse ='^':expandCollapse ='v' }</span>
           </div>
           
          { showItem1  && <ItemList item ={resCategory?.itemCards}></ItemList>}
          
        </div>
        {/* header */}
        
        {/* accodin body */}
       
        </>
    )
}

export default RestaurantCategory