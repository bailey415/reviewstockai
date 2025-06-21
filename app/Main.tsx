'use client'

import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
              Grow Your <span className="text-yellow-300">Google Reviews</span>
              <br />
              with AI-Powered SMS & Email
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Automate review collection, boost your online reputation, and get more customers with
              intelligent SMS and email campaigns.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#demo"
                className="rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-yellow-500"
              >
                Try Demo
              </Link>
              <Link
                href="#pricing"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-blue-700"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">93%</div>
              <div className="text-gray-600">read reviews before buying</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">87%</div>
              <div className="text-gray-600">of reviews go unanswered</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">85%</div>
              <div className="text-gray-600">find businesses on Google</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">49%</div>
              <div className="text-gray-600">spend more with responsive businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">How ReviewStockAI Works</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our AI-powered platform automates the entire review collection process, making it
              effortless for your customers to leave reviews and for you to manage them.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">SMS Automation</h3>
              <p className="text-gray-600">
                Send personalized SMS messages to customers after their purchase, making it easy for
                them to leave a review with just one click.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Email Campaigns</h3>
              <p className="text-gray-600">
                Create engaging email sequences that encourage customers to share their experience
                and leave positive reviews on Google.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">AI-Powered Responses</h3>
              <p className="text-gray-600">
                Automatically respond to reviews with personalized, professional messages that show
                customers you care about their feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">See It In Action</h2>
            <p className="text-xl text-gray-600">
              Watch how our platform automatically collects and manages your Google reviews
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
              <div className="text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600">Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Start growing your reviews today with our affordable plans
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-lg border-2 border-blue-500 bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-3xl font-bold text-gray-900">ReviewStockAI Pro</h3>
                <div className="mb-2 text-6xl font-bold text-blue-600">$179</div>
                <div className="text-gray-600">per month</div>
                <p className="mt-2 text-sm text-gray-500">No contract, cancel anytime</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited SMS & Email Campaigns</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>AI-Powered Review Responses</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Review Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Google Business Profile Integration</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#contact"
                  className="inline-block w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Grow Your Reviews?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of businesses using ReviewStockAI to boost their online reputation
          </p>
          <Link
            href="#contact"
            className="rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-yellow-500"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start growing your Google reviews? Let's talk about how we can help your
              business.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600">info@reviewstock.io</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600">+1 (415) 629-4008</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h3>
              <form
                id="contactForm"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const formData = new FormData(form)
                  const submitButton = form.querySelector(
                    'button[type="submit"]'
                  ) as HTMLButtonElement
                  const originalText = submitButton.textContent

                  try {
                    submitButton.textContent = 'Sending...'
                    submitButton.disabled = true

                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name: formData.get('name'),
                        email: formData.get('email'),
                        business: formData.get('business'),
                        message: formData.get('message'),
                      }),
                    })

                    if (response.ok) {
                      alert('Thank you! Your message has been sent successfully.')
                      form.reset()
                    } else {
                      const error = await response.json()
                      alert(`Error: ${error.error || 'Failed to send message'}`)
                    }
                  } catch (error) {
                    alert('Error: Failed to send message. Please try again.')
                  } finally {
                    submitButton.textContent = originalText
                    submitButton.disabled = false
                  }
                }}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your business and how we can help"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
