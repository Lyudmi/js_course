import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


  
  class Listitem extends React.Component{
    constructor(props){
      super(props);
      let localStorageObject = JSON.parse(localStorage.getItem(this.props.item));
      this.state = localStorageObject || {class: "",text: "",checked: false,edit: false,color:'white'};
    }
    
    componentDidUpdate() {
      localStorage.setItem(this.props.item,
      JSON.stringify({
        class: this.state.class,
        text: "",
        checked: this.state.checked,
        edit: false,
        color: this.state.color
      }));
    }
    
    // toggleItem(e){
    //   this.setState({checked: e.target.checked});
    //   let newClass = e.target.checked === true ? "checked" : "";
    //   this.setState({class: newClass});
    // }
    
    toggleEdit(e){
      if(this.state.edit){
        this.props.onEdit(this.props.item, this.state.text);
      }
      this.setState({edit: !this.state.edit,text: this.props.item});
      e.target.innerText = e.target.innerText == "Edit" ? "Done" : "Edit";
    }
    
    handleChange(e){
      this.setState({text: e.target.value});
    }
    
    handleDelete(e){
      this.props.onDelete(this.props.id);
    }
    
    finishEdit(e){
      if(e.keyCode == 13){
        this.setState({edit: !this.state.edit});
        this.props.onEdit(this.props.item, this.state.text);
      }
    }
    
    changeColor(e){
      let colors = ['white','#02ff67'];
      let newColor = colors[colors.indexOf(this.state.color) + 1] || colors[0];
      this.setState({color: newColor});
    }
    
    render(){
      let text = <label className={this.state.class}>{this.props.item}</label>;
      if(this.state.edit){
        text = <input type="textbox" className="item_input"
        value={this.state.text} onChange={this.handleChange.bind(this)}
        onKeyDown={this.finishEdit.bind(this)}/>
      }
      return(
        <li className="list_item" style={{background:this.state.color}}>
          {/* <input onChange={this.toggleItem.bind(this)} checked={this.state.checked}
            type="checkbox" style={{display: this.state.edit ? 'none' : 'block'}}/> */}
          
          {text}
          
          <button className="color_btn btn" onClick={this.changeColor.bind(this)}
            style={{background:this.state.color}}>&#10004;
            </button>
          <button className="edit_btn " onClick={this.toggleEdit.bind(this)}>Edit</button>
          <button className="delete_btn btn" onClick={this.handleDelete.bind(this)}>Delete</button>
        </li>
      )
    }
  }
  
  class Todolist extends React.Component{
    render(){
      let list = this.props.items.map((item,i) => {
        return <Listitem item={item} id={i} key={item} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
      })
      return(
        <div >
          <ul>
            {list}
          </ul>
        </div>
      )
    }
  }
  
  class Add extends React.Component{
    render(){
      return(
        <div className="add-todo">
          <form>
            <input className="add-input" type="text" onChange={this.props.onChange} value={this.props.value}/>
            
            <button className="button" type="submit" onClick={this.props.onClick}>+</button>
          </form>
        </div>
      )
    }
  }
  
  
  
  class TodoApp extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {text: '',items: localStorage.getItem('items') ? localStorage.getItem('items').split(',') : ['item']};
    }
    
    addItem(e){
      e.preventDefault();
      if(this.state.items.indexOf(this.state.text) == -1 && this.state.text != ''){
        this.setState({items: this.state.items.concat(this.state.text),text: ''});
      } else {
        this.setState({text: ''})
      }
    }
  
    componentDidUpdate(){
      localStorage.setItem('items', this.state.items);
    }
  
    detectChange(e){
      this.setState({text: e.target.value});
    }
  
    handleDelete(item_id){
      if(this.state.items[item_id]){
        localStorage.removeItem(this.state.items[item_id]);
        let temp_items = [...this.state.items];
        temp_items.splice([item_id],1);
        this.setState({items: temp_items});
      } 
    }
  
    handleEdit(item,newItem){
      
      if(this.state.items.indexOf(newItem) == -1 && newItem != ''){
        localStorage.removeItem(this.state.items[this.state.items.indexOf(item)]);
        this.state.items[this.state.items.indexOf(item)] = newItem;
        this.setState({items: this.state.items});
      }
    }
    
    render(){
      return (
        <div>
          <Add onClick={this.addItem.bind(this)} value={this.state.text} onChange={this.detectChange.bind(this)}/>
          <Todolist items={this.state.items} onDelete={this.handleDelete.bind(this)} onEdit={this.handleEdit.bind(this)}/>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
              document.getElementById('root')
  );
  