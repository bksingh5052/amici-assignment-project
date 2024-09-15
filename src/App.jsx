import "./App.css";
import Heroic from "./components/Heroic";
import Navbar from "./components/Navbar";
import Reasons from "./components/Reasons";
import Subjects from "./components/Subjects";

function App() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden  sm:px-10 px-5">
      <div className="w-full">
        <Navbar />
        <Heroic />
        <Reasons />
        <Subjects />
      </div>
    </main>
  );
}

export default App;
