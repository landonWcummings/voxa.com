export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Loading...</h2>
          <div className="animate-pulse flex space-x-4 justify-center">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          </div>
        </div>
      </div>
    )
  }
  
  