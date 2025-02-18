import {createContext, ReactElement, useState} from "react";
import {ObjectiveType} from "../dtos/okr-types.ts";


type ObjectivesContextType = {
  objectives: ObjectiveType[],
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[]>>
}

export const ObjectivesContext = createContext<ObjectivesContextType>({
  objectives: [],
  setObjectives: () => {
  }
})

const ObjectivesProvider = ({children}: { children: ReactElement }) => {
  const [objectives, setObjectives] = useState<ObjectiveType[]>([])
  return (
    <ObjectivesContext.Provider value={{objectives, setObjectives}}>
      {children}
    </ObjectivesContext.Provider>
  )
}

export default ObjectivesProvider;
