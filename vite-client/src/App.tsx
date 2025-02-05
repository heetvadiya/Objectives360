import './App.css'
import ObjectivesForm from "../components/ObjectivesForm.tsx";
import DisplayObjectives from "../components/DisplayObjectives.tsx";

function App() {
  return (
    <>
      <div className="mx-4 my-8 flex justify-center space-x-4">
        <ObjectivesForm/>
        <DisplayObjectives/>
      </div>
    </>
  )
}

export default App
