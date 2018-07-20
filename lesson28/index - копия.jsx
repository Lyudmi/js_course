import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// class TodoItem extends React.Component {
//   render() {
//     return (
//       <div
//         onClick={this.props.onToggle}
//         style={{ textDecoration: this.props.completed ? 'line-through' : '' }}
//       >
//         { this.props.value }
      
//       </div>
//     );
//   }
// }

// TodoItem.propTypes = {
//   id: PropTypes.number,
//   value: PropTypes.string,
//   completed: PropTypes.bool,
//   onToggle: PropTypes.func,
// };

// class TodoApp extends React.Component {
//   constructor() {
//     super();

//     this.state = { list: [] };
//   }

//   onItemAdd(e) {
//     if (e.keyCode === 13 && e.target.value.length) {
//       this.setState({
//         list: this.state.list.concat({
//           value: e.target.value,
//           id: Math.random(),
//           completed: false,
//         }),
//       });

//       e.target.value = '';
//     }
//   }

//   onCompletedToggle(id) {
//     const result = this.state.list.filter(item => item.id === id)[0];

//     if (result) {
//       result.completed = !result.completed;

//       this.setState({ list: this.state.list });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onKeyDown={this.onItemAdd.bind(this)} />
//         {
//           this.state.list.map((item) => (
//             <TodoItem
//               id={item.id}
//               value={item.value}
//               completed={item.completed}
//               onToggle={this.onCompletedToggle.bind(this, item.id)}
//               key={item.id}
//             />
//           ))
//         }
//         {
//           this.state.list.filter(item => !item.completed).length
//         }
//       </div>
//     );
//   }
// }




class Content extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
        editing:false,
        done:false,
        className:'undone',
        
      };

      this.edit= this.edit.bind(this);
      this.save= this.save.bind(this);
      this.delete= this.delete.bind(this);


  }
 
  edit(){
    this.setState({
      editing:true
    })
  }

  delete(){
   this.props.deleteContentText(this.props.index);
  }

  save(props){
   let val = this.refs.newText.value;
    this.props.updateContentText(val, this.props.index)
    
    this.setState({
      editing:false
    })
  }
 
  drawContent(){
           console.log(this.state.done);

    return(
      <div>
           <span >{this.props.children}</span>
               <button onClick ={this.edit}>edit</button>
     <button onClick ={this.delete}>del</button>
       
      </div>
     );                                
  }
  todo(){
      return(
      <div>
          <form onSubmit ={this.save}>
          <input
            type = 'text'
            ref='newText'
            placeholder={this.props.children}></input>
       <button onClick ={this.save}>save</button>
          </form>
          </div>
      );
  }
  render(){
      if(this.state.editing){
        return this.todo();
      } else{
        return this.drawContent();
      }
    }
  }
class TodoApps extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
        data:[],
        task:''
      }; 
  this.updateContent= this.updateContent.bind(this);
  this.todoContent= this.todoContent.bind(this);
  this.delete= this.delete.bind(this);
  this.add= this.add.bind(this);
  this.listenTask= this.listenTask.bind(this);
  this.handleTask= this.handleTask.bind(this);
  this.handleCheck= this.handleCheck.bind(this);


  }
  handleCheck(e){
    this.setState({
      check:e.target.checked
    })
  }
  listenTask(event){

    this.setState({
      task:event.target.value
    })
    
  }
  
  handleTask(e){
    e.preventDefault()
     
    this.setState({
      task:'',
      data:[...this.state.data, this.state.task]
    })

  }
  add(text){
   var arr = this.state.data;
    arr.push(text);
    this.setState({
      data:arr
    })
    
  }
  delete(e){
     var res = this.state.data.filter(function(el,id) {
              return id != e;
    })
    
      this.setState({
        data: res
      });

  }
  updateContent(newText, i){
    var arr = this.state.data;
    arr[i] = newText;
    this.setState({
      data:arr
    })
  }
  todoContent(text, i){
      return(
     <Content key ={i} 
       index={i}
       updateContentText={this.updateContent}
       deleteContentText={this.delete}
       >   
          
          {text}
          
        </Content>
          );
  }
  render(){

    return(
      <div onSubmit={this.handleTask}>
        <form >
          <input 
            type='text'placeholder='add todo' onChange={this.listenTask} value={this.state.task}
          >
          </input>
        </form>
        
        <div>
          {this.state.data.map(this.todoContent)}

        </div>
      </div>
    );
  }
}
    
    
    
ReactDOM.render(
  <TodoApps />,
            document.getElementById('root')
);
  