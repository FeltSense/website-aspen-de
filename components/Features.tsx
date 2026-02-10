'use client'

import { Shield, Users, Building2, Star, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Experienced & Caring Professionals',
      description: 'Our dental team combines years of expertise with a gentle, patient-first approach to ensure your comfort at every visit.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Dental Services',
      description: 'From routine cleanings to advanced procedures, we provide complete dental care for your entire family under one roof.'
    },
    {
      icon: Building2,
      title: 'Modern, Comfortable Facilities',
      description: 'State-of-the-art equipment in a welcoming environment designed to make your dental experience as pleasant as possible.'
    },
    {
      icon: Star,
      title: '5-Star Rated Patient Care',
      description: 'Consistently recognized for excellence by our patients, we're proud to deliver care that exceeds expectations.'
    },
    {
      icon: MapPin,
      title: 'Conveniently Located on Broadway',
      description: 'Easy to find and accessible for Pearland families, with ample parking and flexible scheduling options.'
    },
    {
      icon: Clock,
      title: 'Emergency Services Available',
      description: 'When dental emergencies happen, we're here for you with prompt, professional care to relieve pain and restore your smile.'
    }
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose Aspen Dental Clinic
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Quality dental care delivered with compassion and expertise in the heart of Pearland, TX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-100 rounded-lg hover:border-primary-500/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/services-feature-1770694965582.png"
              alt="Modern dental facility with comfortable patient areas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/services-feature-1770694965162.png"
              alt="Professional dental team providing quality care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 font-light mb-8">
            Ready to experience the Aspen Dental difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-sm"
          >
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}