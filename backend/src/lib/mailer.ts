import nodemailer from 'nodemailer'
import { config } from '../config.js'

function createTransporter() {
  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) {
    return null
  }

  return nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  })
}

export async function sendPasswordResetEmail({
  to,
  name,
  resetUrl,
}: {
  to: string
  name: string
  resetUrl: string
}) {
  const transporter = createTransporter()

  if (!transporter) {
    console.info(`Password reset email not sent. SMTP is not configured.`)
    console.info(`Password reset link for ${to}: ${resetUrl}`)
    return
  }

  await transporter.sendMail({
    from: config.emailFrom,
    to,
    subject: 'Reset your Asme password',
    text: [
      `Hi ${name},`,
      '',
      'Use this link to reset your Asme password:',
      resetUrl,
      '',
      `This link expires in ${config.passwordResetTokenMinutes} minutes.`,
      '',
      'If you did not request this, you can ignore this email.',
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #15181f;">
        <p>Hi ${name},</p>
        <p>Use this link to reset your Asme password:</p>
        <p>
          <a href="${resetUrl}" style="color: #15181f; font-weight: 700;">
            Reset your password
          </a>
        </p>
        <p>This link expires in ${config.passwordResetTokenMinutes} minutes.</p>
        <p>If you did not request this, you can ignore this email.</p>
      </div>
    `,
  })
}
