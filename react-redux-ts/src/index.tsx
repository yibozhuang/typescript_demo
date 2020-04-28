import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// class App extends React.Component<AppProps, AppState> {
// class App extends React.Component<AppProps> {
//   state = { counter: 0 };

//   //   constructor(props: AppProps) {
//   //     super(props);

//   //     this.state = { counter: 0 };
//   //   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
