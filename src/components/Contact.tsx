"use client";
import React, { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';

interface FormField {
  value: string;
  error: string;
}

interface FormState {
  name: FormField;
  email: FormField;
  message: FormField;
}

const defaultFormState: FormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" }
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormState>(defaultFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const validateForm = (): boolean => {
    let isValid = true;
    const newFormData = { ...formData };

    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    }

    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.value)) {
      newFormData.email.error = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name.value,
        from_email: formData.email.value,
        message: formData.message.value,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.status === 200) {
        setMessage("Message sent successfully!");
        setMessageType("success");
        setFormData(defaultFormState);
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      setMessageType("error");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    }
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: { value, error: "" }
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Get in Touch</h2>
      
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                formData.name.error ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
              } text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:outline-none transition duration-200`}
              value={formData.name.value}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={isLoading}
              aria-label="Name"
            />
            {formData.name.error && (
              <p className="text-red-500 dark:text-red-400 text-xs mt-1">{formData.name.error}</p>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                formData.email.error ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
              } text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:outline-none transition duration-200`}
              value={formData.email.value}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isLoading}
              aria-label="Email"
            />
            {formData.email.error && (
              <p className="text-red-500 dark:text-red-400 text-xs mt-1">{formData.email.error}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Tell us what you'd like to know..."
            rows={6}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
              formData.message.error ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:outline-none transition duration-200`}
            value={formData.message.value}
            onChange={(e) => handleInputChange('message', e.target.value)}
            disabled={isLoading}
            aria-label="Message"
          />
          {formData.message.error && (
            <p className="text-red-500 dark:text-red-400 text-xs mt-1">{formData.message.error}</p>
          )}
        </div>

        <button
          className={`w-full py-3 px-6 rounded-lg font-medium text-white 
            ${isLoading
              ? 'bg-blue-300 dark:bg-blue-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700'
            } transition duration-200 shadow-md`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>

        {message && (
          <div 
            className={`p-4 rounded-lg text-center transition-all duration-300 ${
              messageType === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' 
                : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
            }`}
            role="alert"
          >
            <p className="font-medium">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};