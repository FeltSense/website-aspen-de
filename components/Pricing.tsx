'use client'

import { useState } from 'react'
import { Check, Shield } from 'lucide-react'

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePreOrder = async () => {
    setIsLoading(true)
    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
      if (!priceId) {
        alert('Stripe not configured. Please contact support.')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })

      const { url, error } = await response.json()
      
      if (error) {
        alert('Payment system error. Please try again.')
        console.error(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Unable to process. Please try again.')
      setIsLoading(false)
    }
  }

  const benefits = [
    'Priority scheduling for all family members',
    'Complimentary initial consultation & exam',
    'Exclusive member pricing on treatments',
    'Flexible payment plans available',
    'Same-day emergency care access'
  ]

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Become a Founding Member
          </h2>
          <p className="text-lg text-gray-600">
            Join our founding members and secure priority access to exceptional dental care for your entire family
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-primary-50 to-white border-2 border-primary-500 rounded-3xl p-8 shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-sm">
              Limited Early Access
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-semibold text-gray-900">$29</span>
                <span className="text-gray-600">one-time</span>
              </div>
              <p className="text-gray-600">Founding member enrollment</p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handlePreOrder}
              disabled={isLoading}
              className="block w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-full text-center transition-all duration-300 shadow-sm hover:shadow-md mb-4"
            >
              {isLoading ? 'Processing...' : 'Reserve Your Spot for $29'}
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Secure payment powered by Stripe</span>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Join 150+ families who have already reserved their spots
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-600">
            Questions about membership?{' '}
            <a href="#contact" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}