export default function HeaderSimple({ title, headline, content }) {
  return (
    <div className="">
      <div className="max-w-9xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            {headline}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-6xl sm:tracking-tight lg:text-7xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
