import Header from "./components/header";
// ToDo: import PlanForm from './components/planForm'
import PlanForm from './componets/planForm';
import { JobInfo } from "./types/types";

type Taxonomy = {
  "taxonomy/id": string; // ts allows special character
  "taxonomy/preferred-label": string;
};
export const maxDuration = 60;

/*
- Async Function: The async keyword before the function indicates that it returns a promise. 
Using async allows you to use await within the function to pause execution until a promise resolves. 
- The code you provided is making an asynchronous HTTP GET request to fetch data from an API and then parsing the response as JSON. 
- try...catch block handles errors
- await fetch(...) waits for the fetch request to complete.
*/
const fetchJobData = async () => {
  try {
    const res = await fetch(
      "https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-name&version=latest",
      // next key and its options are specific to Next.js’s data fetching methods. revalidate: false implies that the data from this request won’t be cached or revalidated by Next.js.
      { next: { revalidate: false } }
    );
    // taxonomy is an array of Taxonomy objects
    const taxonomy: Taxonomy[] = await res.json();
    // map() iterate overal taxonomy array for transform the elements
    const jobInfo: JobInfo[] = taxonomy.map((job) => ({
      id: job["taxonomy/id"],
      title: job["taxonomy/preferred-label"],
      education: false,
      experience: false,
    }));
    return jobInfo;
    console.log(taxonomy);
  } catch (error) {
    console.error(error); // log error in console
    return [];
  }
};

export default async function Home() {
  const jobInfo = await fetchJobData()
  return (
    <div className="flex flex-col min-h-[100dvh] lg:pt-14">
      <Header />
      <main>
        <PlanForm jobInfo={jobInfo}>
      </main>
    </div>
  )
}