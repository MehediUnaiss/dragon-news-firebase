import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500 text-6xl">
          <FaExclamationTriangle />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed or does not
          exist.
        </p>

        {/* Button */}
        <Link to="/" className="btn btn-primary px-6 py-2 rounded-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
