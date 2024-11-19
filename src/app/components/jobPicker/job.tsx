import { useJobStore } from "@/app/store/store";
import { JobInfo } from "@/app/types/types";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

type Props = {
  job: JobInfo;
  type: "add" | "remove"; // type can only have one of these two values
  /*function that takes JobInfo as argument with name jobs. 
    Void menas it doesn't return value, only perform action like event handling*/
  clickHandler: (jobs: JobInfo) => void;
};

/* React functional component named Job. It accpets an object of props as argument 
which is destructed into job, type, etc */
export default function Job({ job, type, clickHandler }: Props) {
  /* useJobStore is a custom hook. arrow function tells the store to return only the selectedJobs part of the state.
  It subscribes to changes in the selectedJobs state and updates selectedJobs in the component
  whenever state.selectedJobs changes in the store. */
  const selectedJobs = useJobStore((state) => state.selectedJobs);
  // Allows the component to update the selectedJobs state in the store by calling t.ex. setSelectedJobs(newJobs)
  const setSelectedJobs = useJobStore((state) => state.setSelectedJobs);
  // useFormStatus is another custom hook for managing form states. The pending varible incidates whether a form submission is in progress.
  const { pending } = useFormStatus();

  /* Typical event handler for handling changes to an input element in React. 
   e parameter contains information about the event */
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedJobs(
      selectedJobs.map((selectedJob) => {
        if (selectedJob.id === job.id && e.target.name === "education") {
          return {
            ...selectedJob,
            education: !selectedJob.education,
          };
        }
        if (selectedJob.id === job.id && e.target.name === "experience") {
          return {
            ...selectedJob,
            experience: !selectedJob.experience,
          };
        }
        return selectedJob;
      })
    );
  };
}
