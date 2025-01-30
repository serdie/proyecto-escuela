import { useForm } from "~/components/FormContext";
import { FormNavigation } from "~/components/FormNavigation";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm font-medium text-gray-500">{label}:</span>
      <span className="ml-2 text-gray-900">{value || "Not provided"}</span>
    </div>
  );
}

export default function Review() {
  const { formData } = useForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Review Your Information</h2>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <Section title="Personal Information">
          <Field label="Full Name" value={formData.personalInfo.fullName} />
          <Field label="Email" value={formData.personalInfo.email} />
          <Field label="Age" value={formData.personalInfo.age} />
          <Field label="Occupation" value={formData.personalInfo.occupation} />
        </Section>

        <Section title="Learning Preferences">
          <Field
            label="Content Type"
            value={formData.learningPreferences.contentType}
          />
          <Field
            label="Preferred Format"
            value={formData.learningPreferences.format}
          />
        </Section>

        <Section title="Educational Background">
          <Field
            label="Education Level"
            value={formData.educationalBackground.educationLevel}
          />
          <Field
            label="Certifications"
            value={formData.educationalBackground.certifications}
          />
          <Field
            label="Recent Learning"
            value={formData.educationalBackground.recentLearning}
          />
          <Field
            label="Expertise Level"
            value={formData.educationalBackground.expertise}
          />
        </Section>

        <Section title="Learning Goals">
          <Field
            label="Desired Topic"
            value={formData.learningGoals.desiredTopic}
          />
          <Field
            label="Learning Objectives"
            value={formData.learningGoals.objectives}
          />
          <Field
            label="Time Commitment"
            value={formData.learningGoals.timeCommitment}
          />
          <Field
            label="Completion Timeframe"
            value={formData.learningGoals.completionTimeframe}
          />
        </Section>
      </div>

      <div className="mt-8 flex justify-between">
        <FormNavigation prevPath="/assessment/learning-goals" />
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
        >
          Submit Assessment
        </button>
      </div>
    </div>
  );
}
