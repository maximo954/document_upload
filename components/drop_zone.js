import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./button";
import Icon from "./icon";
import Loader from "./loader";

const path =
  "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z";

const DropZone = () => {
  const [selectedImages, setSelectedImages] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const selected_images = selectedImages?.map((file) => (
    <div>
      <Loader key={file.path} file={file.path} size={file.size} image={<img src={file.preview} className="w-[50px] mr-4" alt={file.path}/>}/>
    </div>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <div className="border p-4 rounded-lg">
          <div className="flex flex-col h-[15rem] items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-4">
                <Icon size="h-8 w-8" color="text-orange-400" path={path} />
                <p className="mb-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Drag & Drop Here Or
                  <span className="font-bold text-gray-500"> Browse</span>
                </p>
              </div>
            </div>
            <Button
              style="px-5 py-2.5 text-sm font-medium text-center w-60 mt-4 text-white bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              label="Upload Manifest"
            />
          </div>
        </div>
      </div>
      <hr className="h-px w-full mt-4 mb-4 border-0 dark:bg-gray-200"></hr>
      <div className="pb-3">{selected_images}</div>
      
    </div>
  );
};

export default DropZone;
