import { useLocation } from "@remix-run/react";

const steps = [
  { path: "personal-info", label: "Personal Information" },
  { path: "learning-preferences", label: "Learning Preferences" },
  { path: "educational-background", label: "Educational Background" },
  { path: "learning-goals", label: "Learning Goals" },
  { path: "review", label: "Review" },
];

export function ProgressIndicator() {
  const location = useLocation();
  const currentStep = steps.findIndex((step) =>
    location.pathname.includes(step.path)
  );

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
      <div
        className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-blue-600 transition-all duration-500"
        style={{
          width: `${((currentStep + 1) / steps.length) * 100}%`,
        }}
      />
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={`flex flex-col items-center ${
              index <= currentStep ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div
              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span className="text-sm font-medium text-white">
                {index + 1}
              </span>
            </div>
            <span className="mt-2 text-sm font-medium">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
