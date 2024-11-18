/* a small utility used to efficiently manage and combine CSS class names in JavaScript or TypeScript applications,
 especially within React components. */
import clsx from "clsx";
// useFormStatus is a hook and is intended to track the status of a form submission
import { useFormStatus } from "react-dom";

//This Props type specifies the types of properties that can be passed into the Input component:
//Type only used in this file, better to create in the file itself.
type Props = {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password"; //This is an optional prop (? makes it optional) that restricts the allowed values to 'text', 'email', or 'password'.
  value?: string; //it may or may not be provided
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //defines an optional onChange handler function for a component, typically for use in an <input> element.
};

// input component function is defined as a functional component with destructured props.
export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  name,
  onChange, //Event handler for the onChange event, capturing any changes in the input’s value.
}: Props) {
  const { pending } =
    useFormStatus(); /*The pending property from useFormStatus lets you check if the form is currently submitting. 
  This destructures the pending status from the useFormStatus hook.*/
  return (
    <div className="md:w-3/4 flex flex-col">
      <label htmlFor={name} className="text-base mb-1">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "border border-gray-300 rounded p-2 ring-1 ring-gray-300 focus:ring-2 focus:outline-none focus:ring-gray-500 transition duration-200 ease-in-out",
          pending && "bg-gray-200" // add a grey background when pending is true
        )}
        name={name}
        id={name}
        disabled={pending} // disables the input when pending is true
      />
    </div>
  );
}
