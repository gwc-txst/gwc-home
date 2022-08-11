import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import gradient from "../public/gradient.jpeg";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-gwc-blue-deeper uppercase tracking-wide">
                Girls Who Code TXST
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Thank you!
              </h1>
              <p className="mt-2 text-base text-gray-700">
                Your contributions help us make a difference.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <div className="text-base font-medium text-gwc-blue-deeper hover:text-gwc-pink-deep">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Image src={gradient} layout="fill" className="z-10" />
      </div>
    </>
  );
}
