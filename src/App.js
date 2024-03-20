import './App.css';
import { INCREMENT, DECREMENT } from './redux/action/action';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Redux implementation with class component</h1>
      <button onClick={() => props.plus()}>up</button> &nbsp;
      <span>value is {props.number}</span>&nbsp;
      <button onClick={() => props.minus()}>down</button>
    </div>
  );
}

// here mapping the states to props and use inside the component
const mapStateToProps = (state) => {
  return {
    number: state.Counter.count
  }
}

// mapping action to props and and trigger with the help of dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(INCREMENT()),
    minus: () => dispatch(DECREMENT())
  }
}

// here connecting the react component with redux
export default connect(mapStateToProps, mapDispatchToProps)(App);