import React from 'react';
import './ListItems.css'

function ListItems(props){
  const items = props.items;
 // const deleteItems = props.deleteItems;
  const listItems = items.map(item =>
    {
        return(<div className="showlist" key={item.key}>
             <p>{item.text}
             <button onClick ={()=>props.deleteItems(item.key)}>Delete</button>
             </p>
        </div>
           
        )
        
           
           
    })
      
   return(
   
  <div>{listItems}</div>
   )

}

export default ListItems;
