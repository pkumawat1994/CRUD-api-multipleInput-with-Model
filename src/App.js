import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import "./index.css";
import MyReactTable from "./component/MyReactTable";
import Toastify from "./component/Toastify";
import Spinner from "./component/Spinner";
import CrudAPI from "./component/CrudAPI";
import MultipleInputData from "./component/MultipleInputData";

function App() {
  return (
    <>
      // <MyReactTable />
      // <Toastify />
      // <Spinner />
      <Home />
      <CrudAPI />
      //multiple input with validation with single state and single handleChange
      <MultipleInputData />
    </>
  );
}

export default App;
