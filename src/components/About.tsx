import { siteConfig } from '../config';

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {about.description}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={about.image}
              alt="About TouchPoint Media"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
