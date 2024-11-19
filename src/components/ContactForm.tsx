import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={6}
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/20 outline-none resize-none"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;