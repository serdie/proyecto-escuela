import { Outlet } from "@remix-run/react";
import { ProgressIndicator } from "~/components/ProgressIndicator";
import { FormProvider } from "~/components/FormContext";

export default function AssessmentLayout() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Learning Assessment
          </h1>
          <ProgressIndicator />
          <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
