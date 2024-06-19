import store from "./app/store";
import Cart from "./features/cart/cart";
import Footer from "./Footer";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Cart />
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
