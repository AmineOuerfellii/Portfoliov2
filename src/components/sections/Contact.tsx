import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="min-h-[600px] py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Let's work together
          </h3>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a href="mailto:hello@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>

            {status && (
              <p className={`text-center text-sm ${status.includes('success') ? 'text-green-600' : 'text-gray-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
