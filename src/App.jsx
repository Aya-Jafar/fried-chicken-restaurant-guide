import "./App.css";
import ResturantPage from "./components/ResturantPage";
import RestaurantDetails from "./components/ResturantDetails";


function App() {
  const currentUrl = window.location.href;
  console.log(currentUrl);

  return (
    <div className="App">
      <h1>Fried Chicken Guide Web App</h1>
      {currentUrl === "http://localhost:3001/" ? (
        <ResturantPage />
      ) : (
        <h1>bye</h1>
      )}
    </div>
  );
}

export default App;
