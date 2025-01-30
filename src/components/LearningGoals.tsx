import { useForm } from "./FormContext";
import { FormNavigation } from "./FormNavigation";

export default function LearningGoals() {
  const { formData, updateFormData } = useForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({
      learningGoals: {
        ...formData.learningGoals,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Learning Goals</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="desiredTopic"
            className="block text-sm font-medium text-gray-700"
          >
            Desired Topic/Subject
          </label>
          <input
            type="text"
            id="desiredTopic"
            name="desiredTopic"
            value={formData.learningGoals.desiredTopic}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="objectives"
            className="block text-sm font-medium text-gray-700"
          >
            Specific Learning Objectives
          </label>
          <textarea
            id="objectives"
            name="objectives"
            value={formData.learningGoals.objectives}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="timeCommitment"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Time Commitment per Week
          </label>
          <select
            id="timeCommitment"
            name="timeCommitment"
            value={formData.learningGoals.timeCommitment}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select time commitment</option>
            <option value="1-2">1-2 hours</option>
            <option value="3-5">3-5 hours</option>
            <option value="6-10">6-10 hours</option>
            <option value="10+">10+ hours</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="completionTimeframe"
            className="block text-sm font-medium text-gray-700"
          >
            Target Completion Timeframe
          </label>
          <select
            id="completionTimeframe"
            name="completionTimeframe"
            value={formData.learningGoals.completionTimeframe}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select timeframe</option>
            <option value="1month">Within 1 month</option>
            <option value="3months">Within 3 months</option>
            <option value="6months">Within 6 months</option>
            <option value="1year">Within 1 year</option>
          </select>
        </div>
      </form>

      <FormNavigation
        prevPath="/assessment/educational-background"
        nextPath="/assessment/review"
        isLastStep
      />
    </div>
  );
}
