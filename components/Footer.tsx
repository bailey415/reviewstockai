import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="bg-[#162242] text-[#fff9f8]">
      <div className="mt-16 flex flex-col items-center py-12">
        <div className="mb-6">
          <h3 className="mb-2 text-2xl font-bold">ReviewStockAI</h3>
          <p className="text-center text-[#fff9f8] opacity-80">
            Grow your Google reviews with AI-powered SMS and email automation
          </p>
        </div>
        <div className="mb-6 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
        </div>
        <div className="mb-4 flex space-x-2 text-sm text-[#fff9f8] opacity-80">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/" className="transition-colors hover:text-[#fb5264]">
            {siteMetadata.title}
          </Link>
        </div>
        <div className="text-sm text-[#fff9f8] opacity-60">
          <Link href="/about" className="mr-4 transition-colors hover:text-[#fb5264]">
            About
          </Link>
          <Link href="/#contact" className="mr-4 transition-colors hover:text-[#fb5264]">
            Contact
          </Link>
          <Link href="/#pricing" className="transition-colors hover:text-[#fb5264]">
            Pricing
          </Link>
        </div>
      </div>
    </footer>
  )
}
