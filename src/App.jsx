import BottomCard from "./components/BottomCard";
import TopCard from "./components/TopCard";
import AddToCart from "./components/AddToCart";
import GuestList from "./components/GuestList";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div>
      <TopCard></TopCard>
      <AddToCart></AddToCart>
      <GuestList></GuestList>
      <FetchData></FetchData>
      <BottomCard></BottomCard>
    </div>
  );
}

export default App;
