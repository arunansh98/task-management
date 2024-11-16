import "./App.css";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="main">
      <div>
        <h1 className="text-center font-[500] mb-3 text-[30px] text-primary">
          Task Management
        </h1>
        <div className="text-center">
          <Input className="mb-[1.5rem]" />
          <TextArea className="mb-[1.5rem]" />
          <button className="!text-[grey] border-grey border-[1px] rounded-[10px] bg-primary px-[1rem] py-[0.5rem] w-[20rem]">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
