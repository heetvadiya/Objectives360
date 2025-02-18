import {CreateObjectiveDto, ObjectiveType} from "../dtos/okr-types.ts";

const API_BASE_URL = "http://localhost:3000";

async function getObjectives(): Promise<ObjectiveType[]> {
  const objectivesResponse = await fetch(`${API_BASE_URL}/objectives`);
  return await objectivesResponse.json();
}

async function createObjective(objectiveToBeCreated: CreateObjectiveDto) {
  const createdObjective = await fetch(`${API_BASE_URL}/objectives`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectiveToBeCreated),
  })
  return await createdObjective.json();
}

export {
  getObjectives,
  createObjective
}