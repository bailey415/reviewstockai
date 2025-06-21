import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About ReviewStockAI' })

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">About ReviewStockAI</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-xl text-gray-600">
            ReviewStockAI is a cutting-edge platform designed to help businesses grow their Google
            reviews through intelligent SMS and email automation. We understand that in today's
            digital world, your online reputation can make or break your business.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mb-6 text-gray-600">
            We're on a mission to help businesses of all sizes build stronger relationships with
            their customers through automated, personalized review collection. Our AI-powered
            platform makes it effortless to gather authentic reviews while maintaining the human
            touch that customers value.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900">Why Choose ReviewStockAI?</h2>
          <ul className="mb-6 list-disc pl-6 text-gray-600">
            <li>AI-powered personalization that feels human</li>
            <li>Seamless integration with Google Business Profile</li>
            <li>Comprehensive analytics and reporting</li>
            <li>24/7 customer support</li>
            <li>Affordable pricing with no long-term contracts</li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Story</h2>
          <p className="mb-6 text-gray-600">
            Founded by a team of marketing and technology experts, ReviewStockAI was born from the
            frustration of seeing great businesses struggle with their online reputation. We believe
            that every business deserves to showcase their excellence through authentic customer
            reviews.
          </p>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-blue-900">Ready to Get Started?</h3>
            <p className="mb-4 text-blue-800">
              Join thousands of businesses that trust ReviewStockAI to grow their online reputation.
            </p>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
