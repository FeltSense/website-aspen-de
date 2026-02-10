'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hero-1770694972311.png"
          alt="Modern dental clinic in Pearland, TX"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-white text-sm font-light tracking-wide">
              Serving Pearland, TX
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quality dental care for your{' '}
            <span className="font-semibold text-primary-400">whole family</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-gray-200 font-light mb-12 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Where your smile is our priority. Comprehensive dental services with gentle,
            personalized care from a team you can trust.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              href="tel:+18325146562"
              className="group inline-flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (832) 514-6562</span>
            </Link>

            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center gap-8 mt-16 pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-white">15+</span>
              <span className="text-sm text-gray-300 font-light">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-white">5,000+</span>
              <span className="text-sm text-gray-300 font-light">Happy Patients</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-white">4.9★</span>
              <span className="text-sm text-gray-300 font-light">Patient Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}