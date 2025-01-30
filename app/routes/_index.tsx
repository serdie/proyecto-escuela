import { redirect, type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Assessment System" },
    { name: "description", content: "Personalized learning assessment system" },
  ];
};

export async function loader() {
  return redirect("/assessment");
}

export default function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold">Learning Assessment System</h1>
        <Link
          to="/assessment"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Start Assessment
        </Link>
      </div>
    </div>
  );
}
