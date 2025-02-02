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

export type {ObjectiveType, KeyResultType}