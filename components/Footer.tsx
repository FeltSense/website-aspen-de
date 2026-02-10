import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'General Dentistry', href: '/services/general' },
      { name: 'Cosmetic Dentistry', href: '/services/cosmetic' },
      { name: 'Orthodontics', href: '/services/orthodontics' },
      { name: 'Emergency Care', href: '/services/emergency' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Patient Reviews', href: '/reviews' },
      { name: 'Careers', href: '/careers' },
    ],
    support: [
      { name: 'New Patients', href: '/new-patients' },
      { name: 'Insurance & Billing', href: '/insurance' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold text-white">Aspen Dental Clinic</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Quality dental care for your whole family in Pearland, TX - where your smile is our priority.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary-500" />
                <span>1234 Medical Plaza Drive, Pearland, TX 77584</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-500" />
                <span>(281) 555-SMILE</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-500" />
                <span>hello@aspendental.com</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors duration-200 hover:text-primary-500"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="mt-6 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-6 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Support</h3>
              <ul className="mt-6 space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Aspen Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 transition-colors duration-200 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 transition-colors duration-200 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}