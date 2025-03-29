import { Link } from "react-router";

function Error() {
  return (
    <main className="grid h-screen absolute w-screen top-0 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-8xl font-semibold text-indigo-800">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to=""
            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-gray-500"
          >
            <p className="text-white">Go back home</p>
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-gray-900">
            Contact support &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
