import { ExternalLink } from 'lucide-react';
import { siteConfig } from '../config';

export function Portfolio() {
  const { portfolio } = siteConfig;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Trusted by Global Brands
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          We've partnered with industry leaders to create unforgettable experiences
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.brandName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.brandName}
                    </h3>
                    {item.category && (
                      <p className="text-gray-300 text-sm">{item.category}</p>
                    )}
                  </div>
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
