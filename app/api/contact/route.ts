import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, business, message } = await request.json()

    // Validate required fields
    if (!name || !email || !business || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Email content
    const emailContent = `
New Contact Form Submission from ReviewStockAI Website

Name: ${name}
Email: ${email}
Business: ${business}

Message:
${message}

---
This message was sent from the ReviewStockAI contact form.
    `.trim()

    // Send email using a simple email service
    // For now, we'll use a placeholder that you can replace with your preferred email service
    const emailData = {
      to: 'info@reviewstock.io',
      from: 'noreply@reviewstock.io',
      subject: `New Contact Form Submission from ${name} - ${business}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    }

    // You can integrate with your preferred email service here:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with Gmail
    // - Or use a service like Formspree, Netlify Forms, etc.

    // For now, we'll just log the email data
    console.log('Email would be sent:', emailData)

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
