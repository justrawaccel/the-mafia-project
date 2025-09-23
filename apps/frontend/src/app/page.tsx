import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          The Mafia Project
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An open-source reimagining of the classic Mafia game with customizable rules and interactive play
        </p>
        
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Customizable Rules</h3>
          <p className="text-gray-600">
            Create your own game variants with custom roles, rules, and mechanics
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Interactive Play</h3>
          <p className="text-gray-600">
            Engage in real-time games with players from around the world
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Open Source</h3>
          <p className="text-gray-600">
            Contribute to the project and help shape the future of online Mafia
          </p>
        </div>
      </div>
    </main>
  );
}
