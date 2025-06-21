import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'About ReviewStockAI' })

export default function Page() {
  return (
    <div className="container mx-auto bg-[#fff9f8] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#162242]">About ReviewStockAI</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-xl text-[#162242]">
            ReviewStockAI is a cutting-edge platform designed to help businesses grow their Google
            reviews through intelligent SMS and email automation. We understand that in today's
            digital world, your online reputation can make or break your business.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-[#162242]">Our Mission</h2>
          <p className="mb-6 text-[#162242]">
            We're on a mission to help businesses of all sizes build stronger relationships with
            their customers through automated, personalized review collection. Our AI-powered
            platform makes it effortless to gather authentic reviews while maintaining the human
            touch that customers value.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-[#162242]">Why Choose ReviewStockAI?</h2>
          <ul className="mb-6 list-disc pl-6 text-[#162242]">
            <li>AI-powered personalization that feels human</li>
            <li>Seamless integration with Google Business Profile</li>
            <li>Comprehensive analytics and reporting</li>
            <li>24/7 customer support</li>
            <li>Affordable pricing with no long-term contracts</li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-[#162242]">Our Story</h2>
          <p className="mb-6 text-[#162242]">
            Founded by a team of marketing and technology experts, ReviewStockAI was born from the
            frustration of seeing great businesses struggle with their online reputation. We believe
            that every business deserves to showcase their excellence through authentic customer
            reviews.
          </p>

          <div className="rounded-lg border-2 border-[#2950d3] bg-[#fff9f8] p-6">
            <h3 className="mb-2 text-xl font-bold text-[#162242]">Ready to Get Started?</h3>
            <p className="mb-4 text-[#162242]">
              Join thousands of businesses that trust ReviewStockAI to grow their online reputation.
            </p>
            <Link
              href="/#contact"
              className="rounded-lg bg-[#2950d3] px-6 py-3 font-bold text-white transition-colors hover:bg-[#1e3db8]"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
