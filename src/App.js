import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Click ME" backgroundColor="red" color="white"/>
      <ButtonComponent text="No, Click ME" backgroundColor="blue" color="white"/>

      <ImageComponent src="http://placekitten.com/1024" />
      <ImageComponent src="http://placekitten.com/2048" />
    </div>
  );
}

export default App;
