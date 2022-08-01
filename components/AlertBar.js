/* This example requires Tailwind CSS v2.0+ */
import { RefreshIcon } from "@heroicons/react/solid";

export default function AlertBar() {
  return (
    <div className="rounded-md bg-gwc-blue-lighter p-4 xl:w-1/3 sm:w-1/2 w-full mx-4 sm:mx-0 h-14 cursor-default">
      <div className="flex justify-center">
        <div className="flex-shrink-0 text-gwc-blue-deeper">
          <RefreshIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gwc-blue-deeper">
            Processing...
          </p>
        </div>
      </div>
    </div>
  );
}
