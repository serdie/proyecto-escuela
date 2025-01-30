import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold">Learning Assessment System</h1>
        <Link
          to="/assessment/personal-info"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Start Assessment
        </Link>
      </div>
    </div>
  );
}
