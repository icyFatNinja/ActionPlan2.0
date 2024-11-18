import { create } from "zustand"; // Zustand is a lightweight, fast, and scalable state management library for React applications.
import { JobInfo } from "@/app/types/types";

/* Defining a TypeScript interface called JobState. This interface is used to define the shape of an object 
that will represent the state of jobs within an application, 
particularly useful in state management libraries like Zustand, React’s useState, or when using context. */
interface JobState {
  selectedJobs: JobInfo[]; // An array of JobInfo objects that holds the selected jobs.
  setSelectedJobs: (
    jobs: JobInfo[]
  ) => void /* This is a function that will take "jobs" as parameter with type of an array of JobInfo objects and update the state of selectedJobs. 
  It’s commonly used in state management for updating the list of selected jobs. */;
}

/* create<JobState>(): create is a function from Zustand that creates a hook to manage state. */
export const useJobStore = create<JobState>()((set) => ({
  selectedJobs: [],
  setSelectedJobs: (jobs) => set({ selectedJobs: jobs }),
}));
/* 
(set) => ({ ... }):
	•	The argument set is a function provided by Zustand that allows you to update the state. You can use it inside the function to modify the state.
	•	The function returns an object that represents the state, with keys corresponding to the state properties and functions to update them. 
State Object:
	•	selectedJobs: []: This initializes the selectedJobs state as an empty array. This is where the list of selected jobs will be stored.
	•	setSelectedJobs: (jobs) => set({ selectedJobs: jobs }): This defines a function setSelectedJobs that takes an array of JobInfo objects (jobs) and updates the state of selectedJobs by calling the set function.
	•	set({ selectedJobs: jobs }): This updates the selectedJobs state with the new array of jobs passed to setSelectedJobs.
export const useJobStore:
	•	This exports the custom hook useJobStore that can be used in your React components to access and update the state managed by Zustand.
*/
