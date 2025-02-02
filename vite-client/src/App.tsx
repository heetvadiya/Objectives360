import './App.css'
import {KeyResultType, ObjectiveType} from "./okr-types.ts";
import {useState} from "react";

function App() {

  const initialKeyResult: KeyResultType = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metrics: "",
  }

  const [objectiveTitle, setObjectiveTitle] = useState<string>("");
  const [keyResults, setKeyResults] = useState<KeyResultType[]>([initialKeyResult]);
  const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

  function handleAddKeyResult() {
    const newKeyResult = initialKeyResult
    setKeyResults([...keyResults, newKeyResult])
  }

  function handleDeleteKeyResults(index: number) {
    if (keyResults.length > 1) {
      keyResults.splice(index, 1);
    } else {
      keyResults[0].title = '';
      keyResults[0].initialValue = 0;
      keyResults[0].currentValue = 0;
      keyResults[0].targetValue = 0;
      keyResults[0].metrics = '';
    }
    setKeyResults([...keyResults]);
  }

  function handleAddObjective() {
    const newObjective: ObjectiveType = {
      objectiveTitle: objectiveTitle,
      keyResults: keyResults
    }
    setObjectives([...objectives, newObjective])
    setObjectiveTitle("")
  }

  return (
    <>
      <div className="mx-4 my-8 flex justify-center">
        <div className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center shadow-lg">

          <div className="flex flex-col space-y-4">
            <div className="text-3xl font-serif font-medium text-black-200 font-semibold self-center">
              <span>Create Objective</span>
            </div>
            <div className="flex flex-col space-y-2 px-4 py-8">
              <div className='flex-col'>
                <label htmlFor="objective-input" className="font-serif">New Objective</label>
                <input
                  className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                  type="text"
                  value={objectiveTitle}
                  placeholder="Add Your Objective"
                  onChange={(e) => {
                    setObjectiveTitle(e.target.value)
                  }
                  }/>
              </div>
            </div>


            <div className="flex-col space-y-4">
              <div className="text-xl font-serif font-medium text-black-200 font-semibold justify-self-center">
                <span>Add Key Results</span>
              </div>


              {
                keyResults.map((keyResult, index) => (
                  <div className='bg-blue-100 rounded-md px-4 py-8 space-y-2' key={index}>
                    <label htmlFor="keyresult-title-input" className="font-serif">New Key Result Title</label>
                    <input
                      className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                      type="text"
                      value={keyResult.title}
                      placeholder="Add Key Result Title"
                      onChange={(e) => {
                        keyResult.title = e.target.value;
                        setKeyResults([...keyResults])
                      }}/>
                    <div className="flex space-x-4">
                      <div className="flex-col space-y-2">
                        <label htmlFor="initial-value-input" className="font-serif">Initial Value</label>
                        <input
                          className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                          type="number"
                          value={keyResult.initialValue}
                          placeholder="Add Initial Value"
                          onChange={(e) => {
                            keyResult.initialValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>

                      <div className='flex-col space-y-2'>
                        <label htmlFor="current-value-input" className="font-serif">Current Value</label>
                        <input
                          className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                          type="number"
                          value={keyResult.currentValue}
                          placeholder="Add Current Value"
                          onChange={(e) => {
                            keyResult.currentValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>

                      <div className='flex-col space-y-2'>
                        <label htmlFor="target-value-input" className="font-serif">Target Value</label>
                        <input
                          className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                          type="number"
                          value={keyResult.targetValue}
                          placeholder="Add Target Value"
                          onChange={(e) => {
                            keyResult.targetValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>
                    </div>

                    <div className="flex space-x-4 justify-between items-end">
                      <div className="flex-col space-y-2">
                        <label htmlFor="metric-input" className="font-serif">Metrics</label>
                        <input
                          className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                          type="text"
                          value={keyResult.metrics}
                          placeholder="Add Defining Metrics"
                          onChange={(e) => {
                            keyResult.metrics = e.target.value;
                            setKeyResults([...keyResults])
                          }}/>
                      </div>
                      <button
                        className="bg-red-400 px-1 py-2 rounded-md text-white text-lg hover:bg-red-500 border-none font-serif w-1/4"
                        onClick={() => {
                          handleDeleteKeyResults(index)
                        }}>
                        Delete Key result
                      </button>
                    </div>
                  </div>
                ))
              }


              <div className="flex justify-between">
                <button
                  className="bg-green-400 px-1 py-2 rounded-md text-white text-lg hover:bg-green-500 border-none font-serif w-1/4"
                  onClick={() => {
                    handleAddObjective()
                  }}>
                  Add Objective
                </button>
                <button
                  className="bg-blue-400 px-1 py-2 rounded-md text-white text-lg hover:bg-blue-500 border-none font-serif w-1/4"
                  onClick={() => {
                    handleAddKeyResult()
                  }}>
                  Add Key Result
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          objectives.length > 0 ? (
              <div
                className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-lg">
                {
                  objectives.map((objective, obindex) => (
                    <div key={obindex}
                         className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-lg">
                      <h1>{objective.objectiveTitle}</h1>
                      {objective.keyResults.map((kresult, krindex) => (
                        <div key={krindex}
                             className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-lg">
                          <h2>{kresult.title}</h2>
                          <h2>{kresult.initialValue}</h2>
                          <h2>{kresult.currentValue}</h2>
                          <h2>{kresult.targetValue}</h2>
                          <h2>{kresult.metrics}</h2>
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
                className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-lg">
                <p>Sorry :(</p>
              </div>
            )
        }
      </div>
    </>
  )
}

export default App
