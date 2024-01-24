"use client";
import { Button, DropZone, DropDownMenu, Loader, RadioButton, ToggleButton, TestCenter, Icon } from "@/components";

const selections = ["Driver Report", "Client Report", "Admin Report"];
const icon_path = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
const close_icon_path = "M6 18 18 6M6 6l12 12";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen ">
      <div>
        <Button
          style="px-5 py-5 text-sm font-medium text-center w-60 mt-4 text-white bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          label="Open Modal"
          action={() => document.getElementById("my_modal_1").showModal()}
        />
      </div>

      <dialog id="my_modal_1" className="modal w-4/5 rounded-3xl">
        <div className="modal-action pl-10 mt-8">
          <form method="dialog">
            <Button
              style="pt-2 text-center w-12 text-white bg-blue-900 rounded-lg focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              path={close_icon_path}
              color="text-white"
              size="h-8 w-8"
            />
          </form>
        </div>
        <div className="modal-box pl-32 pr-32 pb-32 rounded-lg">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 text-black">
            Document Upload
          </h1>
          <hr className="h-px w-80 mx-auto mt-6 mb-14 border-0 dark:bg-gray-200"></hr>

          <div className="flex gap-16">
            <div className="w-3/5">
              <DropDownMenu
                selections={selections}
                sel="Select Import Name:"
                size="full"
              />
              <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-200"></hr>
              <div>
                <p className="mb-4 font-bold text-gray-500">
                  Select a manifest that you'd like to import
                </p>
                <DropZone />
                <hr className="h-px w-full mt-6 mb-4 border-0 dark:bg-gray-200"></hr>
                {/* <Loader />
                <hr className="h-px w-full mt-4 mb-4 border-0 dark:bg-gray-200"></hr> */}
              </div>
              <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-300"></hr>
              <h1 className="mb-4 font-bold text-gray-500">
                Elapse Data Checking:
              </h1>
              <p className="mb-4 font-bold text-green-400">No Elapsed Dates!</p>
              <hr className="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-300"></hr>
              <p className="mb-4 font-bold text-gray-500">Tolerance Window:</p>

              <div className="flex">
                <ToggleButton
                  style="text-gray-400 text-sm ml-2"
                  label="Toggle ON"
                />
                <span className="ml-2 text-gray-400">|</span>
                <div className="ml-3">
                  <Icon color="text-gray-400" size="h-6 w-6" path={icon_path} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm ml-2">
                    Select Tolerance Level
                  </p>
                </div>
              </div>
            </div>

            <div className="w-2/5 ">
              <h1 className="text-gray-500 font-bold mb-4">
                Split schedule using social distancing?
              </h1>
              <RadioButton
                option1="Yes"
                option2="No"
                name="schedule"
                style="text-gray-500 text-sm ml-2 block"
              />
              <hr className="h-px w-1/2 mt-2 mb-4 border-0 dark:bg-gray-300"></hr>

              <p className="mb-4 font-bold text-gray-500">Location Checking:</p>
              <p className="mb-4 font-bold text-green-400">All Available!</p>
              <hr className="h-px w-1/2 mt-2 mb-4 border-0 dark:bg-gray-300"></hr>

              <p className="mb-4 font-bold text-gray-500">Client:</p>
              <RadioButton
                option1="Single"
                option2="Multiple"
                name="client"
                style="text-gray-500 text-sm ml-2 block"
              />

              <div className="flex flex-col gap-4">
                <TestCenter num="1" style="text-gray-500 text-sm" />
                <TestCenter num="2" style="text-gray-500 text-sm" />
                <TestCenter num="3" style="text-gray-500 text-sm" />
                <TestCenter num="4" style="text-gray-500 text-sm" />
              </div>
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
            <form method="dialog">
              <Button
                style="px-5 py-4 text-sm font-medium text-center w-60 mt-4 text-orange-300 rounded-lg border border-orange-300 hover:border-orange-600 hover:text-orange-600"
                label="Cancel"
              />
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
