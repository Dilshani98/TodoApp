import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],//array define items
      currentItem:{
        text:'',
        key:''
      }
      }
      this.handleInput = this.handleInput.bind(this);
      this.addItems = this.addItems.bind(this);
      this.deleteItems = this.deleteItems.bind(this);
    }
  

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
   
  }

  addItems(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
 
    if(newItem.text!=''){
      const newItems =[...this.state.items,newItem];
     this.setState({
        items:newItems,
        currentItem:{
          text:'',key:''
        }
      })
    }
  }

  deleteItems(key){
    const filteredItems= this.state.items.filter(item=>item.key!=key);

    this.setState({
      items:filteredItems
    })
  }

  

  render(){
  return(
   
    <div className="App">
      <header>
      <h1>To-Do App</h1>
      <form id= "to-do-form" onSubmit={this.addItems}>
        <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
        <button type="submit">Add</button>
      </form>
      </header>
      
      <ListItems items={this.state.items}  deleteItems={this.deleteItems}></ListItems>
      
     
    </div>
  );
  }
}

export default App;
