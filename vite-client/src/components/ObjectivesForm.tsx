import {KeyResultType, ObjectiveType} from "../dtos/okr-types.ts";
import {useContext, useState} from "react";
import {ObjectivesContext} from "../context/ObjectivesProvider.tsx";

type ObjectivesFormProps = {
}

const initialKeyResult: KeyResultType = {
  title: '',
  initialValue: 0,
  currentValue: 0,
  targetValue: 0,
  metrics: '',
}

export default function ObjectivesForm({
                                       }: ObjectivesFormProps) {

  const {objectives, setObjectives} = useContext(ObjectivesContext)
  const [keyResults, setKeyResults] = useState<KeyResultType[]>([{...initialKeyResult}]);
  const [objectiveTitle, setObjectiveTitle] = useState<string>("");


  function handleAddNewKeyResult() {
    setKeyResults([...keyResults, {...initialKeyResult}])
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
    setObjectives([...objectives, {...newObjective}])
    setObjectiveTitle("")
    setKeyResults([{...initialKeyResult}])
  }

  return (
    <>
      <div className="w-1/2 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center shadow-md">
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
                <div className='bg-gray-100 shadow-md border-gray-200 border-2 rounded-md px-4 py-8 space-y-2'
                     key={index}>
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
                      className="bg-red-400 shadow-md px-1 py-2 rounded-md text-white text-lg hover:bg-red-500 border-none font-serif w-1/4"
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
                className="bg-green-400 shadow-md px-1 py-2 rounded-md text-white text-lg hover:bg-green-500 border-none font-serif w-1/4"
                onClick={() => {
                  handleAddObjective()
                }}>
                Add Objective
              </button>
              <button
                className="bg-blue-400 shadow-md px-1 py-2 rounded-md text-white text-lg hover:bg-blue-500 border-none font-serif w-1/4"
                onClick={() => {
                  handleAddNewKeyResult()
                }}>
                Add Key Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}