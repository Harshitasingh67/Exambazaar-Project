import "./App.css";
import BankDetails from "./components/BankDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      {/* main section starts from here */}

      <main className="flex justify-between items-center  gap-8 px-7 lg:px-0">
        {/* Dashboard */}
        <Sidebar></Sidebar>
        {/* form-content */}
        <BankDetails></BankDetails>
      </main>
    </>
  );
}

export default App;
