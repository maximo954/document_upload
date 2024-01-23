import DropZone from "@/components/drop_zone";
import ImportName from "@/components/import_name";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-20">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 text-black">
        Document Upload
      </h1>
      <hr class="h-px w-80 mx-auto mt-6 mb-14 border-0 dark:bg-gray-200"></hr>

      <div class="flex text-black gap-8">
        <div class="flex-auto w-64 ...">
          <ImportName />
          <hr class="h-px w-1/2 mt-6 mb-4 border-0 dark:bg-gray-200"></hr>
          <div>
            <p className="mb-4">Select a manifest that you'd like to import</p>
            <DropZone />
          </div>
        </div>
        <div class="flex-auto w-32 ...">
          <p>Split schedule using social distancing?</p>
        </div>
      </div>
    </main>
  );
}
