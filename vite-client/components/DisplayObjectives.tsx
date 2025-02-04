import {ObjectiveType} from "../src/okr-types";
import {FilePlus, Pencil, Trash} from "lucide-react";
import {useState} from "react";

type DisplayObjectivesProps = {
  objectives: ObjectiveType[],
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[]>>
}

export default function DisplayObjectives(
  {
    objectives,
    setObjectives
  }: DisplayObjectivesProps
) {

  const [showKeyResultModal, setShowKeyResultModal] = useState(false);
  function handleDeleteObjective(index: number) {
    objectives.splice(index, 1);
    setObjectives([...objectives]);
  }

  function handleUpdateObjective(index: number) {
    console.log(index)
  }

  function handleDeleteKeyResult(index: number) {
    console.log(index)
  }

  function handleUpdateKeyResult(index: number) {
    console.log(index)
  }

  return (
    <>
      {
        objectives.length > 0 ? (
            <div
              className="w-1/2 flex-wrap space-y-4 space-x-2 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center shadow-md font-serif">
              {
                objectives.map((objectiveIterator, objectiveIndex) => (
                  <div key={objectiveIndex}
                       className="w-full space-y-2 rounded-md py-8 px-4 flex-col justify-center">
                    <div className="flex justify-between space-x-2">
                      <h1 className="w-1/2 text-2xl">{objectiveIterator.objectiveTitle}</h1>
                      <button
                        className="flex justify-center bg-gray-400 shadow-md px-1 py-2 rounded-full text-white text-xs hover:bg-gray-500 border-none font-serif w-1/3 h-1/4"
                        onClick={() => {
                          handleUpdateObjective(objectiveIndex)
                        }}>
                        <Pencil></Pencil>
                      </button>
                      <button
                        className="flex justify-center bg-green-400 shadow-md px-1 py-2 rounded-full text-white text-xs hover:bg-green-500 border-none font-serif w-1/3 h-1/4"
                        onClick={() => {
                          setShowKeyResultModal(true);
                        }}>
                        <FilePlus></FilePlus>
                      </button>
                      <button
                        className="flex justify-center bg-red-400 shadow-md px-1 py-2 rounded-full text-white text-xs hover:bg-red-500 border-none font-serif w-1/3 h-1/4"
                        onClick={() => {
                          handleDeleteObjective(objectiveIndex)
                        }}>
                        <Trash></Trash>
                      </button>
                    </div>
                    {objectiveIterator.keyResults.map((keyResultIterator, keyResultIndex) => (
                      <div key={keyResultIndex}
                           className="bg-blue-50 space-y-2 border-2 border-gray-300 rounded-md py-8 px-4 flex-col justify-center shadow-md">
                        <div className="flex space-x-2">
                          <h2 className="text-xl w-1/2">{keyResultIterator.title}</h2>
                          <div className='flex w-1/2 justify-end space-x-2'>
                            <button
                              className="flex justify-center bg-gray-400 shadow-md px-1 py-2 rounded-full text-white text-xs hover:bg-gray-500 border-none font-serif w-1/4"
                              onClick={() => {
                                handleUpdateKeyResult(keyResultIndex)
                              }}>
                              <Pencil></Pencil>
                            </button>
                            <button
                              className="flex justify-center bg-red-400 shadow-md px-1 py-2 rounded-full text-white text-xs hover:bg-red-500 border-none font-serif w-1/4"
                              onClick={() => {
                                handleDeleteKeyResult(keyResultIndex)
                              }}>
                              <Trash></Trash>
                            </button>
                          </div>
                        </div>
                        <h2>{keyResultIterator.initialValue}</h2>
                        <h2>{keyResultIterator.currentValue}</h2>
                        <h2>{keyResultIterator.targetValue}</h2>
                        <h2>{keyResultIterator.metrics}</h2>
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
    </>
  )
}