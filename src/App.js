import "./App.css";
import Body from "./layout/body";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
