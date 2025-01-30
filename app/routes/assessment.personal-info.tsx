import { useForm } from "~/components/FormContext";
import { FormNavigation } from "~/components/FormNavigation";

export default function PersonalInfo() {
  const { formData, updateFormData } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Personal Information</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.personalInfo.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.personalInfo.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium text-gray-700"
          >
            Current Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.personalInfo.occupation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </form>

      <FormNavigation nextPath="/assessment/learning-preferences" />
    </div>
  );
}
