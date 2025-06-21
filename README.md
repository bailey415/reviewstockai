# ReviewStockAI

A modern website for ReviewStockAI - an AI-powered platform that helps businesses grow their Google reviews through SMS and email automation.

## About

ReviewStockAI is designed to help businesses of all sizes build stronger relationships with their customers through automated, personalized review collection. Our AI-powered platform makes it effortless to gather authentic reviews while maintaining the human touch that customers value.

## Features

- **SMS Automation**: Send personalized SMS messages to customers after their purchase
- **Email Campaigns**: Create engaging email sequences that encourage reviews
- **AI-Powered Responses**: Automatically respond to reviews with personalized messages
- **Google Business Profile Integration**: Seamless integration with your Google Business Profile
- **Analytics Dashboard**: Track your review performance and customer engagement
- **24/7 Support**: Get help whenever you need it

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: Contentlayer for MDX content management
- **Deployment**: Vercel-ready

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/reviewstockai.git
cd reviewstockai
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
reviewstockai/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── Main.tsx           # Home page component
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── data/                  # Site metadata and configuration
├── public/                # Static assets
└── styles/                # Global styles
```

## Customization

### Site Metadata

Edit `data/siteMetadata.js` to update:

- Site title and description
- Contact information
- Social media links
- Analytics configuration

### Styling

The site uses Tailwind CSS for styling. You can customize the design by:

- Modifying the color scheme in the CSS classes
- Updating the logo in `public/static/images/`
- Adjusting the layout in the component files

### Content

- Update the main page content in `app/Main.tsx`
- Modify the about page in `app/about/page.tsx`
- Add new pages in the `app/` directory

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## License

This project is licensed under the MIT License.

## Contact

- Email: hello@reviewstockai.com
- Phone: +1 (555) 123-4567
- Website: https://reviewstockai.com

---

Built with ❤️ for businesses that want to grow their online reputation.
