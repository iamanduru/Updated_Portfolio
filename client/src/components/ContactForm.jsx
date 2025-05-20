
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form Status Message */}
      {submitStatus && (
        <div 
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-amber-50 border border-teal-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300' 
              : 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name 
                ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200' 
                : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
            } bg-teal-750 text-gray-300 transition-colors focus:outline-none`}
            placeholder="e.g Mitchelle Andy"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email 
              ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200' 
              : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
          } bg-teal-750 text-gray-300 transition-colors focus:outline-none`}
            placeholder="your@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>
      
      {/* Subject Field */}
      <div>
        <label 
          htmlFor="subject" 
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-teal-500 text-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 bg-teal-750  transition-colors focus:outline-none"
          placeholder="What do you wanna talk about..?"
        />
      </div>
      
      {/* Message Field */}
      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message 
            ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200' 
            : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
        } bg-teal-750 text-gray-300 transition-colors focus:outline-none`}
          placeholder="Doodle away....."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      
      {/* Privacy Policy */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
          />
        </div>
        <div className="ml-3">
          <label htmlFor="privacy" className="text-sm text-gray-400">
            I agree to the <a href="/privacy-policy" className="text-amber-600  hover:underline">Privacy Policy</a> and consent to being contacted regarding my request.
          </label>
        </div>
      </div>
      
      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-emerald-600 hover:bg-amber-500 text-white hover:text-teal-100 font-medium py-3 rounded-lg shadow-lg transition-all flex justify-center items-center ${
            isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
      </div>
      
      {/* Help Text */}
      <p className="text-sm text-center text-gray-400 mt-4">
        Fields marked with <span className="text-red-500">*</span> are required
      </p>
    </form>
  );
}