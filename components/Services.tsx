'use client'

import Image from 'next/image'
import { Check, Shield, Heart, Users, Clock, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Regular cleanings, exams, and X-rays to keep your smile healthy and catch issues early.',
      features: ['Comprehensive Exams', 'Professional Cleanings', 'Digital X-Rays', 'Oral Cancer Screening']
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures designed for natural-looking results.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Gentle, comprehensive care for patients of all ages, from children to seniors.',
      features: ['Pediatric Dentistry', 'Senior Care', 'Orthodontics', 'Emergency Services']
    },
    {
      icon: Award,
      title: 'Restorative Care',
      description: 'Restore function and aesthetics with our proven restorative dental solutions.',
      features: ['Crowns & Bridges', 'Dental Implants', 'Root Canals', 'Dentures']
    }
  ]

  const highlights = [
    {
      icon: Clock,
      title: 'Same-Day Appointments',
      description: 'We understand dental emergencies happen. Call us for same-day care when you need it most.'
    },
    {
      icon: Shield,
      title: 'Insurance Friendly',
      description: 'We work with most major insurance providers and offer flexible payment plans for your convenience.'
    }
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Comprehensive Dental Care for Your Family
          </h2>
          <p className="text-lg text-gray-600 font-light">
            From routine checkups to advanced procedures, we provide the complete range of dental services your family needs in one convenient Pearland location.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary-500 bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section with Images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/services-feature-1770694984184.png"
              alt="Modern dental treatment room with advanced equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Advanced Technology for Better Care
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
              We invest in the latest dental technology to provide more accurate diagnoses, comfortable treatments, and better outcomes for our patients. Our state-of-the-art facility features digital X-rays, intraoral cameras, and modern treatment rooms designed for your comfort.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary-500 bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Digital Imaging</p>
                  <p className="text-gray-600 font-light">90% less radiation than traditional X-rays</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary-500 bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Comfortable Environment</p>
                  <p className="text-gray-600 font-light">Designed to reduce anxiety and promote relaxation</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary-500 bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Efficient Procedures</p>
                  <p className="text-gray-600 font-light">Shorter appointment times without compromising quality</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Featured Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Your Comfort Is Our Priority
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
              We understand that visiting the dentist can cause anxiety for some patients. That's why we've created a welcoming environment where you can feel relaxed and confident in the care you receive. Our experienced team takes the time to explain procedures, answer questions, and ensure you're comfortable throughout your visit.
            </p>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500 bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 font-light">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/services-feature-1770694983275.png"
              alt="Friendly dental team welcoming patients"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-2xl py-16 px-8">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Experience the Aspen Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Schedule your appointment today and discover why families throughout Pearland trust us with their dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-500 rounded-xl hover:bg-primary-600 transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}