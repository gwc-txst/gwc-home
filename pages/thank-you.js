import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function ThankYou() {
  return (
    <>
      <main
        className="min-h-screen bg-cover sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
            Girls Who Code TXST
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gwc-coal tracking-tight sm:text-5xl">
            Thank you!
          </h1>
          <p className="mt-6 text-lg font-medium text-black text-opacity-50">
            Your contributions help us make a difference.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Go home
              <ArrowNarrowRightIcon
                className="h-5 w-5 ml-2"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
