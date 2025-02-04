import './App.css'
import {ObjectiveType} from "./okr-types.ts";
import {useState} from "react";
import ObjectivesForm from "../components/ObjectivesForm.tsx";
import DisplayObjectives from "../components/DisplayObjectives.tsx";

function App() {

  const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

  return (
    <>
      <div className="mx-4 my-8 flex justify-center space-x-4">
        <ObjectivesForm objectives={objectives} setObjectives={setObjectives}/>
        <DisplayObjectives objectives={objectives} setObjectives={setObjectives}/>
      </div>
    </>
  )
}

export default App
