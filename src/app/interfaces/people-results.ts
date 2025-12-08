import { Person } from "./person";

export interface PeopleResults {
  count: number,
  next: string | null,
  previous: string | null,
  results: Person[]
}
