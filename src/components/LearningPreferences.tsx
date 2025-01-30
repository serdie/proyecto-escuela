import { useForm } from "./FormContext";
import { FormNavigation } from "./FormNavigation";

export default function LearningPreferences() {
  const { formData, updateFormData } = useForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({
      learningPreferences: {
        ...formData.learningPreferences,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Learning Preferences</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content Type
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="tutorial"
                name="contentType"
                value="tutorial"
                checked={formData.learningPreferences.contentType === "tutorial"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="tutorial"
                className="ml-2 block text-sm text-gray-700"
              >
                Tutorial (up to 5 hours)
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="course"
                name="contentType"
                value="course"
                checked={formData.learningPreferences.contentType === "course"}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="course"
                className="ml-2 block text-sm text-gray-700"
              >
                Course (up to 300 hours)
              </label>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="format"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Learning Format
          </label>
          <select
            id="format"
            name="format"
            value={formData.learningPreferences.format}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a format</option>
            <option value="video">Video-based</option>
            <option value="text">Text-based</option>
            <option value="interactive">Interactive</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </form>

      <FormNavigation
        prevPath="/assessment/personal-info"
        nextPath="/assessment/educational-background"
      />
    </div>
  );
}
