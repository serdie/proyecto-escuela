import { useForm } from "~/components/FormContext";
import { FormNavigation } from "~/components/FormNavigation";

export default function EducationalBackground() {
  const { formData, updateFormData } = useForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({
      educationalBackground: {
        ...formData.educationalBackground,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Educational Background</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="educationLevel"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Education Level
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={formData.educationalBackground.educationLevel}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select education level</option>
            <option value="highSchool">High School</option>
            <option value="associate">Associate Degree</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="certifications"
            className="block text-sm font-medium text-gray-700"
          >
            Relevant Certifications
          </label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={formData.educationalBackground.certifications}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="recentLearning"
            className="block text-sm font-medium text-gray-700"
          >
            Recent Learning Activities Timeline
          </label>
          <select
            id="recentLearning"
            name="recentLearning"
            value={formData.educationalBackground.recentLearning}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select timeline</option>
            <option value="current">Currently enrolled</option>
            <option value="lastMonth">Within last month</option>
            <option value="last6Months">Within last 6 months</option>
            <option value="moreThan6Months">More than 6 months ago</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="expertise"
            className="block text-sm font-medium text-gray-700"
          >
            Subject Matter Expertise (1-5)
          </label>
          <input
            type="range"
            id="expertise"
            name="expertise"
            min="1"
            max="5"
            value={formData.educationalBackground.expertise}
            onChange={handleChange}
            className="mt-1 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-600">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
      </form>

      <FormNavigation
        prevPath="/assessment/learning-preferences"
        nextPath="/assessment/learning-goals"
      />
    </div>
  );
}
