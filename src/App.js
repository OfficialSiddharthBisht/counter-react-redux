import './App.css';
import {useSelector , useDispatch} from 'react-redux'

function App() {
  let myState = useSelector((state) => state.changeTheState);
  return (
    <div className="App">
      <h1>Counter Application React-Redux</h1>
      <div className='container'>
        <button><span>-</span></button>
        <input className = "text" type="text" value={myState}></input>
        <button><span>+</span></button>
      </div>
    </div>
  );
}

export default App;
