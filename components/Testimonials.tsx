'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Martinez and the entire team at Aspen Dental made me feel so comfortable during my visit. They took the time to explain everything and truly cared about my concerns. Best dental experience I've ever had!",
      name: "Sarah Thompson",
      role: "Pearland Resident",
      image: "/images/testimonial-testimonials-0-1770694957860.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "I was nervous about bringing my kids to the dentist, but the staff here was amazing with them. They made it fun and educational. Now my children actually look forward to their dental checkups!",
      name: "Michael Chen",
      role: "Parent of Two",
      image: "/images/testimonial-testimonials-0-1770694958434.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "After years of avoiding the dentist, I finally found a place where I feel welcomed and cared for. The team is professional, gentle, and genuinely invested in my oral health. Highly recommend!",
      name: "Jennifer Davis",
      role: "Long-time Patient",
      image: "/images/testimonial-testimonials-0-1770694959039.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from families in Pearland who trust us with their smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-secondary-500 mb-6">
            Join hundreds of satisfied patients in Pearland
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Schedule Your Visit
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}