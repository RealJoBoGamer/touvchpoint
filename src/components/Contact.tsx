import { Mail, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${contact.email}`}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">{contact.email}</p>
              <div className="inline-flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                Send a message
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
