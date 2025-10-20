import { siteConfig } from '../config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-lg text-gray-900">
              T
            </div>
            <div>
              <div className="text-xl font-bold">{siteConfig.company.name}</div>
              <div className="text-sm text-gray-400">{siteConfig.company.tagline}</div>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.company.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
