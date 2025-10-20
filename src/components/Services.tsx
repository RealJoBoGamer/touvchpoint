import {
  Video,
  Film,
  Camera,
  Monitor,
  Edit,
  Users,
  LucideIcon
} from 'lucide-react';
import { siteConfig } from '../config';

const iconMap: Record<string, LucideIcon> = {
  video: Video,
  film: Film,
  camera: Camera,
  monitor: Monitor,
  edit: Edit,
  users: Users
};

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          {services.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Video;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gray-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
