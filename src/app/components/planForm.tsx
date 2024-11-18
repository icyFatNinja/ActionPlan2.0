"use client";
/*In a Next.js project, adding 'use client' as the first line in a .tsx file tells 
Next.js that the component should be rendered entirely on the client side rather than on the server.*/

import { JobInfo } from "@/app/types/types"; // {} used for export in the types file
import Input from "./input"; // no {} is used for default export in its input file
import FilterList from "./jobPicker/filterList";
