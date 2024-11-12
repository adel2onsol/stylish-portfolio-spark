import React from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <section className="py-24 px-8 sm:px-24" id="contact">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="mb-8">
          I'm currently looking for new opportunities. Whether you have a question or 
          just want to say hi, I'll try my best to get back to you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-light-navy border-2 border-transparent rounded p-4 focus:border-mint outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-light-navy border-2 border-transparent rounded p-4 focus:border-mint outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full bg-light-navy border-2 border-transparent rounded p-4 focus:border-mint outline-none"
            required
          />
          <button
            type="submit"
            className="border-2 border-mint text-mint px-8 py-4 rounded hover:bg-mint/10 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;