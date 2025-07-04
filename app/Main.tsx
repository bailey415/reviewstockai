'use client'

import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#162242] via-[#2950d3] to-[#162242] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
              Grow Your <span className="text-[#fb5264]">Google Reviews</span>
              <br />
              with AI-Powered SMS & Email
            </h1>
            <p className="mb-8 text-xl text-[#fff9f8] md:text-2xl">
              Automate review collection, boost your online reputation, and get more customers with
              intelligent SMS and email campaigns.
            </p>
            <div className="flex justify-center gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="rounded-lg bg-[#fb5264] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#e64555]"
              >
                View Pricing
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-[#162242]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fff9f8] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-[#2950d3]">93%</div>
              <div className="text-[#162242]">read reviews before buying</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-[#2950d3]">87%</div>
              <div className="text-[#162242]">of reviews go unanswered</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-[#2950d3]">85%</div>
              <div className="text-[#162242]">find businesses on Google</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-[#2950d3]">49%</div>
              <div className="text-[#162242]">spend more with responsive businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#162242]">Perfect For Your Business</h2>
            <p className="mx-auto max-w-3xl text-xl text-[#162242]">
              Whether you're collecting reviews or managing appointments, our AI-powered platform
              helps you deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Review Management */}
            <div className="rounded-lg border-2 border-[#2950d3] bg-[#fff9f8] p-8">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2950d3]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#162242]">Review Management</h3>
              </div>
              <p className="mb-4 text-[#162242]">
                Automatically collect and manage Google reviews with personalized SMS and email
                campaigns. Boost your online reputation and attract more customers.
              </p>
              <ul className="space-y-2 text-[#162242]">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AI-powered review responses
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Google Business Profile integration
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Review analytics dashboard
                </li>
              </ul>
            </div>

            {/* Medical Appointment Reminders */}
            <div className="rounded-lg border-2 border-[#2950d3] bg-[#fff9f8] p-8">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2950d3]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#162242]">Medical Appointment Reminders</h3>
              </div>
              <p className="mb-4 text-[#162242]">
                Reduce no-shows and improve patient care with intelligent SMS and email appointment
                reminders. Perfect for medical offices, dental practices, and healthcare providers.
              </p>
              <ul className="space-y-2 text-[#162242]">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  HIPAA-compliant messaging
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Automated appointment confirmations
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reduce no-show rates by up to 80%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#fff9f8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#162242]">How ReviewStockAI Works</h2>
            <p className="mx-auto max-w-3xl text-xl text-[#162242]">
              Our AI-powered platform automates the entire process, making it effortless for your
              customers to engage and for you to manage everything.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff9f8]">
                <svg
                  className="h-8 w-8 text-[#2950d3]"
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
              <h3 className="mb-3 text-xl font-bold text-[#162242]">SMS Automation</h3>
              <p className="text-[#162242]">
                Send personalized SMS messages to customers after their purchase or appointment,
                making it easy for them to leave a review or confirm their visit.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff9f8]">
                <svg
                  className="h-8 w-8 text-[#2950d3]"
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
              <h3 className="mb-3 text-xl font-bold text-[#162242]">Email Campaigns</h3>
              <p className="text-[#162242]">
                Create engaging email sequences that encourage customers to share their experience
                and leave positive reviews on Google.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff9f8]">
                <svg
                  className="h-8 w-8 text-[#2950d3]"
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
              <h3 className="mb-3 text-xl font-bold text-[#162242]">AI-Powered Responses</h3>
              <p className="text-[#162242]">
                Automatically respond to reviews with personalized, professional messages that show
                customers you care about their feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automated Communication Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#162242]">AI Automated Communication</h2>
            <p className="mx-auto max-w-3xl text-xl text-[#162242]">
              Engage customers and patients at every step with intelligent, automated messages for
              reviews and appointments.
            </p>
          </div>
          <div className="flex flex-col items-center gap-12">
            {/* Main showcase image for AI review replies */}
            <div className="w-full max-w-5xl text-center">
              <h3 className="mb-4 text-2xl font-bold text-[#162242]">
                AI-Powered Review Responses
              </h3>
              <Image
                src="/static/images/responseai.png"
                alt="AI powered Google Review reply"
                width={890}
                height={445}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            {/* Grid for SMS examples */}
            <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-lg bg-[#f9fafb] p-8 shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold text-[#162242]">
                  Automated Review Requests
                </h3>
                <Image
                  src="/static/images/tyforservice.png"
                  alt="Automated SMS review request"
                  width={600}
                  height={300}
                  className="w-full max-w-sm rounded-md object-contain"
                />
              </div>
              <div className="flex flex-col items-center rounded-lg bg-[#f9fafb] p-8 shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold text-[#162242]">
                  Appointment Reminders
                </h3>
                <Image
                  src="/static/images/apptreminder.png"
                  alt="Automated SMS appointment reminder"
                  width={600}
                  height={300}
                  className="w-full max-w-sm rounded-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#fff9f8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#162242]">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[#162242]">
              Start growing your reviews and managing appointments today with our affordable plans
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Pro Plan */}
            <div className="rounded-lg border-2 border-[#2950d3] bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-3xl font-bold text-[#162242]">ReviewStockAI Pro</h3>
                <div className="mb-2 text-6xl font-bold text-[#2950d3]">$249</div>
                <div className="text-[#162242]">per month</div>
                <p className="mt-2 text-sm text-[#162242]">No contract, cancel anytime</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Unlimited SMS & Email Campaigns</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">AI-Powered Review Responses</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Review Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Google Business Profile Integration</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">24/7 Customer Support</span>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#contact"
                  className="inline-block w-full rounded-lg bg-[#2950d3] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#1e3db8]"
                >
                  Get Started Today
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-lg border-2 border-[#fb5264] bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-[#fb5264] px-4 py-2 text-sm font-bold text-white">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-3xl font-bold text-[#162242]">ReviewStockAI Premium</h3>
                <div className="mb-2 text-6xl font-bold text-[#2950d3]">$299</div>
                <div className="text-[#162242]">per month</div>
                <p className="mt-2 text-sm text-[#162242]">No contract, cancel anytime</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Everything in Pro Plan</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Medical Appointment Reminders</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">HIPAA-Compliant Messaging</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Automated Appointment Confirmations</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Reduce No-Show Rates by up to 80%</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-5 w-5 text-[#fb5264]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#162242]">Priority Customer Support</span>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#contact"
                  className="inline-block w-full rounded-lg bg-[#fb5264] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#e64555]"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#162242] to-[#2950d3] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Grow Your Business?</h2>
          <p className="mb-8 text-xl text-[#fff9f8]">
            Join thousands of businesses using ReviewStockAI to boost their online reputation and
            improve patient care
          </p>
          <Link
            href="#contact"
            className="rounded-lg bg-[#fb5264] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#e64555]"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#fff9f8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#162242]">Get In Touch</h2>
            <p className="text-xl text-[#162242]">
              Ready to start growing your reviews and managing appointments? Let's talk about how we
              can help your business.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#162242]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-[#2950d3]"
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
                  <span className="text-[#162242]">info@reviewstock.io</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-[#2950d3]"
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
                  <span className="text-[#162242]">+1 (415) 629-4008</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 text-[#2950d3]"
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
                  <span className="text-[#162242]">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#162242]">Send us a message</h3>
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#2950d3]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#2950d3]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#2950d3]"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your business and how we can help"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#2950d3]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#2950d3] px-6 py-3 font-bold text-white transition-colors hover:bg-[#1e3db8] disabled:opacity-50"
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
