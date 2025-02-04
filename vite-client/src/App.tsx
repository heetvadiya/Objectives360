import './App.css'
import {ObjectiveType} from "./okr-types.ts";
import {useState} from "react";
import ObjectivesForm from "../components/ObjectivesForm.tsx";

function App() {



  const [objectiveTitle, setObjectiveTitle] = useState<string>("");
  const [objectives, setObjectives] = useState<ObjectiveType[]>([]);


  function handleDeleteObjective(index: number) {
    objectives.splice(index, 1);
    setObjectives([...objectives]);
  }

  return (
    <>
      <div className="mx-4 my-8 flex justify-center space-x-4">
        <ObjectivesForm objectiveTitle={objectiveTitle} setObjectiveTitle={setObjectiveTitle} objectives={objectives}
                        setObjectives={setObjectives}/>
        {
          objectives.length > 0 ? (
              <div
                className="w-1/2 flex-wrap space-y-4 space-x-2 bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center shadow-md">
                {
                  objectives.map((iobjective, objectiveIndex) => (
                    <div key={objectiveIndex}
                         className="w-1/3 bg-blue-100 space-y-2 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-md">
                      <div className="flex justify-between">
                        <h1>{iobjective.objectiveTitle}</h1>
                        <button
                          className="bg-red-400 shadow-md px-1 py-2 rounded-md text-white text-xs hover:bg-red-500 border-none font-serif w-1/4"
                          onClick={() => {
                            handleDeleteObjective(objectiveIndex)
                          }}>
                          Delete
                        </button>
                      </div>
                      {iobjective.keyResults.map((ikeyResult, keyResultIndex) => (
                        <div key={keyResultIndex}
                             className="bg-blue-50 space-y-2 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-md">
                          <h2>{ikeyResult.title}</h2>
                          <h2>{ikeyResult.initialValue}</h2>
                          <h2>{ikeyResult.currentValue}</h2>
                          <h2>{ikeyResult.targetValue}</h2>
                          <h2>{ikeyResult.metrics}</h2>
                        </div>
                      ))}
                    </div>
                  ))
                }
              </div>
            )
            :
            (
              <div
                className="w-1/2 bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center shadow-lg">
                <div className='text-lg font-bold font-serif'>Sorry :(</div>
              </div>
            )
        }
      </div>
    </>
  )
}

export default App
