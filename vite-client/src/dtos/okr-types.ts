type KeyResultType = {
  title: string,
  initialValue: number,
  currentValue: number,
  targetValue: number
  metrics: string
}

type ObjectiveType = {
  objectiveTitle: string
  keyResults: KeyResultType[];
}

type CreateObjectiveDto = {
  objectiveTitle: string
}

export type {ObjectiveType, KeyResultType, CreateObjectiveDto}