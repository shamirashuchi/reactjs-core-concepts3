import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

//dynamic data load steps
function LoadComments(){
  //declare state
  const [commments,setComments] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return(
    <div>
      <h2>comments: {commments.length}</h2>
      {
        commments.map(comment => <Comment email={comment.email} body={comment.body}></Comment> )
      }
    </div>
  )
}

function Comment(props){
  return (
    <div>
      <h4>email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

function Counter(){
//usestate use kori change korar jonno
  const [count,setCount] = useState(55);
//eventhandler
  const handleincrease = () =>setCount(count+1);
  const handledecrease = () =>setCount(count-1);
  //eventhandler er sathe button connect kora
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleincrease}>Increase</button>
      <button onClick={handledecrease}>Decrease</button>
    </div>
  )
}

export default App;
