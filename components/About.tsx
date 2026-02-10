'use client'

import Image from 'next/image'
import { Shield, Heart, Users, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '5-Star', label: 'Average Rating' },
    { number: '100%', label: 'Patient Care Focus' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'State-of-the-art sterilization and safety protocols for your peace of mind'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We understand dental anxiety and prioritize your comfort every visit'
    },
    {
      icon: Users,
      title: 'Family-Focused',
      description: 'Comprehensive care for patients of all ages, from toddlers to seniors'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Board-certified dentists with ongoing training in latest techniques'
    }
  ]

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Your Partner in <span className="font-semibold text-primary-500">Dental Health</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Since 2009, Aspen Dental Clinic has been Pearland's trusted destination for comprehensive family dental care.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/about-background-1770694983755.png"
              alt="Aspen Dental Clinic - Modern dental office serving Pearland families"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that quality dental care should be accessible, comfortable, and personalized for every member of your family. Our practice was founded on the principle that exceptional dentistry goes beyond technical expertise—it's about building lasting relationships with our patients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in the heart of Pearland, we've had the privilege of caring for thousands of families in our community. From routine cleanings to advanced restorative procedures, our team combines modern technology with a gentle, patient-first approach.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're bringing your child for their first dental visit or seeking comprehensive care for yourself, you'll find a welcoming environment where your comfort and health are our top priorities. We take the time to listen, explain your options clearly, and work with you to create a treatment plan that fits your needs and budget.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl font-light text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-light text-gray-900 mb-16 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}