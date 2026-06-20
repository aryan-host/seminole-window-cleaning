'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const address = String(formData.get('address') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Basic server-side validation.
  if (!name || !phone || !email) {
    return {
      status: 'error',
      message: 'Please provide your name, phone number, and email so we can reach you.',
    }
  }

  try {
    await resend.emails.send({
      // While your domain is unverified in Resend, this sandbox sender is the
      // only one that will work. Once seminolewindowcleaning.com is verified
      // in the Resend dashboard, switch this to:
      // 'Seminole Window & Exterior Cleaning <contact@seminolewindowcleaning.com>'
      from: 'Seminole Window & Exterior Cleaning <onboarding@resend.dev>',
      to: 'contact@seminolewindowcleaning.com',
      replyTo: email,
      subject: `New estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Address: ${address || 'Not provided'}`,
        `Service needed: ${service || 'Not specified'}`,
        '',
        'Message:',
        message || '(no message provided)',
      ].join('\n'),
    })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return {
      status: 'error',
      message:
        'Something went wrong sending your request. Please call or text us directly at 321-300-6696.',
    }
  }

  return {
    status: 'success',
    message:
      'Thank you! Your request has been received. We will reach out shortly to schedule your free estimate. 😁',
  }
}
