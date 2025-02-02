import './App.css'

function App() {

  return (
    <>
      <div className="mx-4 my-8 flex justify-center">
        <div className="bg-gray-50 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-center">

          <div className="flex flex-col space-y-4">
            <div className="text-3xl font-serif font-medium text-black-200 font-semibold">
              <span>Create Objective</span>
            </div>
            <div className="flex flex-col space-y-2">
              <div className='flex-col'>
                <label htmlFor="objective-input" className="font-serif">New Objective</label>
                <input
                  className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                  type="text"
                  // value={newObjective}
                  placeholder="Add Your Objective"
                  onChange={(e) => (e.target.value)}/>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-400 px-1 py-2 rounded-md text-white text-lg hover:bg-blue-500 border-none font-serif w-1/4">
                  Add Objective
                </button>
              </div>
            </div>


            <div className="flex-col space-y-4">
              <div className="text-xl font-serif font-medium text-black-200 font-semibold">
                <span>Add Key Results</span>
              </div>


              <label htmlFor="keyresult-title-input" className="font-serif">New Key Result Title</label>
              <input
                className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                type="text"
                // value={newObjective}
                placeholder="Add Key Result Title"
                onChange={(e) => (e.target.value)}/>

              <div className="flex space-x-4">
                <div className="flex-col space-y-2">
                  <label htmlFor="initial-value-input" className="font-serif">Initial Value</label>
                  <input
                    className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                    type="number"
                    // value={newObjective}
                    placeholder="Add Initial Value"
                    onChange={(e) => (e.target.value)}/>
                </div>

                <div className='flex-col space-y-2'>
                  <label htmlFor="current-value-input" className="font-serif">Current Value</label>
                  <input
                    className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                    type="number"
                    // value={newObjective}
                    placeholder="Add Current Value"
                    onChange={(e) => (e.target.value)}/>
                </div>

                <div className='flex-col space-y-2'>
                  <label htmlFor="target-value-input" className="font-serif">Target Value</label>
                  <input
                    className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                    type="number"
                    // value={newObjective}
                    placeholder="Add Target Value"
                    onChange={(e) => (e.target.value)}/>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-col space-y-2">
                  <label htmlFor="metric-input" className="font-serif">Metric</label>
                  <input
                    className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
                    type="text"
                    // value={newObjective}
                    placeholder="Add Defining Metric"
                    onChange={(e) => (e.target.value)}/>
                </div>

              </div>

              <div className="flex justify-end">
                <button
                  className="bg-blue-400 px-1 py-2 rounded-md text-white text-lg hover:bg-blue-500 border-none font-serif w-1/4">
                  Add Key Result
                </button>
              </div>

            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default App
