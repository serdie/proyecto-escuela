import { Link } from "@remix-run/react";

interface FormNavigationProps {
  prevPath?: string;
  nextPath?: string;
  isLastStep?: boolean;
}

export function FormNavigation({
  prevPath,
  nextPath,
  isLastStep = false,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      {prevPath ? (
        <Link
          to={prevPath}
          className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link
          to={nextPath}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          {isLastStep ? "Review" : "Next"}
        </Link>
      )}
    </div>
  );
}
