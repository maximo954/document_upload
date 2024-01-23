import Button from "@/components/button";
import DropZone from "@/components/drop_zone";
import DropDownMenu from "@/components/drop_down_menu";
import Loader from "@/components/loader";
import RadioButton from "@/components/radio_button";
import ToggleButton from "@/components/toggle";

export default function Home() {
  return (
    <main className="p-20">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 text-black">
        Document Upload
      </h1>
      <hr className="h-px w-80 mx-auto mt-6 mb-14 border-0 dark:bg-gray-200"></hr>

      <div className="flex gap-16">

        <div className="flex-1 w-3/4">
          <DropDownMenu />
          <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-200"></hr>
          <div>
            <p className="mb-4 font-bold text-gray-500">
              Select a manifest that you'd like to import
            </p>
            <DropZone />
            <hr className="h-px w-full mt-6 mb-4 border-0 dark:bg-gray-200"></hr>
            <Loader />
            <hr className="h-px w-full mt-4 mb-4 border-0 dark:bg-gray-200"></hr>
          </div>
          <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-300"></hr>
          <h1 className="mb-4 font-bold text-gray-500">
            Elapse Data Checking:
          </h1>
          <p className="mb-4 font-bold text-green-400">No Elapsed Dates!</p>
          <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-300"></hr>
          <p className="mb-4 font-bold text-gray-500">Tolerance Window:</p>
          <ToggleButton />
        </div>

        <div className="flex-1 w-1/4 ">
          <h1 className="text-gray-500 font-bold mb-4">
            Split schedule using social distancing?
          </h1>
          <RadioButton option1='Yes' option2='No'/>
          <hr className="h-px w-1/2 mt-2 mb-4 border-0 dark:bg-gray-300"></hr>
          <p className="mb-4 font-bold text-gray-500">Location Checking:</p>
          <p className="mb-4 font-bold text-green-400">All Available!</p>
          <hr className="h-px w-1/2 mt-2 mb-4 border-0 dark:bg-gray-300"></hr>
          <p className="mb-4 font-bold text-gray-500">Client:</p>
          <RadioButton option1='Single' option2='Multiple'/>
        </div>

      </div>

      <h1 className="text-center text-lg font-bold mt-6 text-black">
        Data in the import file is correct. Please press Continue to import.
      </h1>

      <div className="flex justify-center mt-2 gap-5">
        <Button
          style="px-5 py-4 text-sm font-medium text-center w-60 mt-4 text-white bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          label="Continue Import"
        />
        <Button
          style="px-5 py-4 text-sm font-medium text-center w-60 mt-4 text-orange-300 rounded-lg border border-orange-300 hover:border-orange-600 hover:text-orange-600"
          label="Cancel"
        />
      </div>
    </main>
  );
}
