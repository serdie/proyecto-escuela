import { createContext, useContext, useState } from "react";
import type { FormData } from "~/types/form";

const FormContext = createContext<{
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
} | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: "",
      email: "",
      age: "",
      occupation: "",
    },
    learningPreferences: {
      contentType: "",
      format: "",
    },
    educationalBackground: {
      educationLevel: "",
      certifications: "",
      recentLearning: "",
      expertise: "",
    },
    learningGoals: {
      desiredTopic: "",
      objectives: "",
      timeCommitment: "",
      completionTimeframe: "",
    },
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
