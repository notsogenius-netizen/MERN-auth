import { Route, Routes } from "react-router";
import { Button } from "./components/ui/button";

const Home = () => (
  <div>
    <Button>Click me</Button>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
