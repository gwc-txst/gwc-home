export default function FeatureCTA() {
  return (
    <div className="bg-gwc-blue-deeper">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Help us close the gender gap in tech.</span>
          <span className="block">Make a donation.</span>
        </h2>

        <a
          href="/donate"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Donate
        </a>
      </div>
    </div>
  );
}
