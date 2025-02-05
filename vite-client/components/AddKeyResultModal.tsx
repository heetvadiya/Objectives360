import {useState} from "react";
import {KeyResultType, ObjectiveType} from "../src/okr-types.ts";

const initialKeyResult: KeyResultType = {
  title: "",
  initialValue: 0,
  currentValue: 0,
  targetValue: 0,
  metrics: "",
}
type AddKeyResultModalProps = {
  objectiveIndex: number,
  objectives: ObjectiveType[],
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[]>>,
  showKeyResultModal: boolean,
  setShowKeyResultModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddKeyResultModal(
  {
    objectiveIndex,
    objectives,
    setObjectives,
    showKeyResultModal,
    setShowKeyResultModal
  }: AddKeyResultModalProps) {

  const [keyResult, setKeyResult] = useState<KeyResultType>(initialKeyResult)

  function handleAddKeyResult() {
    objectives[objectiveIndex].keyResults.push(keyResult)
    setObjectives([...objectives])
    setKeyResult({...initialKeyResult})
    setShowKeyResultModal(false)
  }

  return (
    <>{
      showKeyResultModal
        ?
        <div className="inset-0 fixed bg-gray-900/50 flex justify-center items-center">
          <div className='bg-gray-100 shadow-md border-gray-200 border-2 rounded-md px-4 py-8 space-y-2'>
            <div className="text-xl font-serif font-medium text-black-200 font-semibold justify-self-center">
              <span>Add Key Results</span>
            </div>
            <label htmlFor="keyresult-title-input" className="font-serif">New Key Result Title</label>
            <input
              className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
              type="text"
              value={keyResult.title}
              placeholder="Add Key Result Title"
              onChange={(e) => {
                keyResult.title = e.target.value;
                setKeyResult({...keyResult})
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
                    setKeyResult({...keyResult})
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
                    setKeyResult({...keyResult})
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
                    setKeyResult({...keyResult})
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
                    setKeyResult({...keyResult})
                  }}/>
              </div>
            </div>
            <div className="flex space-x-4 justify-end">
              <button
                className="bg-gray-400 shadow-md px-1 py-2 rounded-md text-white text-lg hover:bg-gray-500 border-none font-serif w-1/4"
                onClick={() => {
                  setKeyResult({...initialKeyResult})
                  setShowKeyResultModal(false)
                }}>
                Cancel
              </button>
              <button
                className="bg-green-400 shadow-md px-1 py-2 rounded-md text-white text-lg hover:bg-green-500 border-none font-serif w-1/4"
                onClick={() => {
                  handleAddKeyResult()
                }}>
                Add Key result
              </button>
            </div>
          </div>
        </div> :
        <></>
    }
    </>
  )
}