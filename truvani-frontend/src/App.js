import "./App.css";
import Header from "./components/appHeader/Header";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Cart from "./components/shoppingCart/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <div className="well">
            <ItemListContainer />
          </div>
        </div>
        <div className="col-md-4">
          <div className="well">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
