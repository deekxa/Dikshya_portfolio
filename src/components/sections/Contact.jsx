'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Add your form submission logic here
    // This is a placeholder - implement your own backend or service
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4" id="contact">
      <div className="container mx-auto max-w-2xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 px-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <Input
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
            
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'sending'}
              className="w-full"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className="text-green-600 text-center">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
