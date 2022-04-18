import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./component/Wrapper";
import store from "./redux/store/store";
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;
