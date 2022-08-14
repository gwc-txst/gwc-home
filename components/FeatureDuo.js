import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import Image from "next/image";
import gwcParent from "../public/gwc-parent.png";
import txst from "../public/txst.jpeg";
import Link from "next/link";

export default function FeatureDuo() {
  return (
    <div className="relative bg-gradient-to-br from-[#B6FFDD] via-[#788DFF] to-[#FF94FF] pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-9xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-12">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gwc-blue-deep">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Become a member today!
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                  Girls Who Code is absolutely free to join. Every Tuesday we
                  host a CodeLounge, a place to come and hang out, chat, and
                  create community.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Every other Wednesday we host an official meeting, which may
                  be a workshop, guest speaker, or volunteer event.
                </p>
                <div className="mt-6">
                  <Link href="/canvas">
                    <div className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gwc-blue-deep hover:bg-gwc-blue-deeper">
                      Join our Canvas
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-700">
                    &ldquo;Girls Who Code has consistently created an
                    environment full of friendly people, quality learning, and
                    fun experiences.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full relative">
                      <Image
                        src={txst}
                        alt="workstation"
                        layout="fill"
                        // objectFit="cover"
                        quality={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-800">
                      Stephen Smyth, President of Google Developer Student Club
                      at TXST
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 relative lg:h-full">
              <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 relative lg:left-0 lg:h-full lg:w-auto lg:max-w-none">
                <Image
                  src={txst}
                  alt="txst"
                  layout="fill"
                  // width="1920"
                  // height="1080"
                  quality={100}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-9xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-12 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gwc-blue-deep">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Check out our links
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                  Ask for homework help on Discord, pick up a tshirt from our
                  Etsy, or follow us on Insta. We have so much to offer!
                </p>
                <div className="mt-6">
                  <Link href="/links">
                    <div className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gwc-blue-deep hover:bg-gwc-blue-deeper">
                      Our links
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 relative lg:right-0 lg:h-full lg:w-auto lg:max-w-none">
                <Image
                  src={gwcParent}
                  alt="girls who code logo"
                  layout="fill"
                  // width="1920"
                  // height="1080"
                  quality={100}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
