import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

// Gmail SMTPの設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'somethinghotorcoldtodrink@gmail.com',
    // Gmailのアプリパスワードを使用
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function sendContactNotification(contact: InsertContact) {
  const mailOptions = {
    from: 'somethinghotorcoldtodrink@gmail.com',
    to: 'somethinghotorcoldtodrink@gmail.com',
    subject: `新規お問い合わせ: ${contact.company}様より`,
    text: `
新規のお問い合わせがありました。

お名前: ${contact.name}
会社名: ${contact.company}
メールアドレス: ${contact.email}

お問い合わせ内容:
${contact.message}
    `,
    html: `
<h2>新規のお問い合わせがありました。</h2>

<p><strong>お名前:</strong> ${contact.name}</p>
<p><strong>会社名:</strong> ${contact.company}</p>
<p><strong>メールアドレス:</strong> ${contact.email}</p>

<h3>お問い合わせ内容:</h3>
<p>${contact.message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    throw error;
  }
}
