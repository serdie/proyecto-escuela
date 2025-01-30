import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/assessment/personal-info");
}

export default function AssessmentIndex() {
  return null;
}
