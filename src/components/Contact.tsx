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
      }, 3000);
    }
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: { value, error: "" }
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Your Name"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 
              px-2 py-2 rounded-md text-sm text-neutral-700 w-full
              ${formData.name.error ? 'border-red-500' : ''}`}
            value={formData.name.value}
            onChange={(e) => handleInputChange('name', e.target.value)}
            disabled={isLoading}
            aria-label="Name"
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>

        <div className="flex-1">
          <input
            type="email"
            placeholder="Your email address"
            className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 
              px-2 py-2 rounded-md text-sm text-neutral-700 w-full
              ${formData.email.error ? 'border-red-500' : ''}`}
            value={formData.email.value}
            onChange={(e) => handleInputChange('email', e.target.value)}
            disabled={isLoading}
            aria-label="Email"
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 
            px-2 py-2 rounded-md text-sm text-neutral-700 w-full
            ${formData.message.error ? 'border-red-500' : ''}`}
          value={formData.message.value}
          onChange={(e) => handleInputChange('message', e.target.value)}
          disabled={isLoading}
          aria-label="Message"
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>

      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold
          ${isLoading 
            ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
            : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
          }`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Submit'}
      </button>

      {message && (
        <div className={`mt-4 p-2 rounded-md text-center
          ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
          role="alert"
        >
          {message}
        </div>
      )}
    </form>
  );
};