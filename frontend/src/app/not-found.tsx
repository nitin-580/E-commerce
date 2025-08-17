export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <a
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back Home
        </a>
      </div>
    )
  }
  