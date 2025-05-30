import Link from 'next/link';
import { FaHome, FaEnvelope } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <FaHome />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <FaEnvelope />
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
