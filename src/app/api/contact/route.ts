import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()

  // Log for now — replace with Resend / SendGrid when ready
  console.log('[Contact Form Submission]', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    interest: data.interest,
    message: data.message,
    timestamp: new Date().toISOString(),
  })

  // FUTURE: await resend.emails.send({ from: '...', to: '...', ... })

  return NextResponse.json({ success: true })
}
