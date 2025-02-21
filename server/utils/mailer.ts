import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

// メール送信の設定
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.gmail.com',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  },
  debug: true, // デバッグモードを有効化
  logger: true // ロギングを有効化
});

// 設定のテスト
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

// お問い合わせ通知メール送信
export async function sendContactNotification(contact: InsertContact) {
  console.log('Attempting to send notification email to:', process.env.NODEMAILER_USER);

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully:', info.messageId);
    // 自動返信メールを送信
    await sendAutoReply(contact);
  } catch (error: unknown) {
    console.error('Error sending contact notification email:', error);
    throw new Error('Failed to send notification email: ' + (error as Error).message);
  }
}

// 自動返信メール送信
export async function sendAutoReply(contact: InsertContact) {
  console.log('Attempting to send auto-reply email to:', contact.email);

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: contact.email,
    subject: 'お問い合わせありがとうございます',
    text: `
${contact.name}様

この度は知的探求HUBへお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お問い合わせ内容】
お名前: ${contact.name}
会社名: ${contact.company}
メールアドレス: ${contact.email}

お問い合わせ内容:
${contact.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

内容を確認の上、担当者より改めてご連絡させていただきます。
お急ぎの場合は、お電話にてお問い合わせください。

なお、このメールは自動返信メールとなっております。
お問い合わせに対する回答ではございませんので、ご了承ください。

--
知的探求HUB
    `,
    html: `
<p>${contact.name}様</p>

<p>この度は知的探求HUBへお問い合わせいただき、誠にありがとうございます。<br>
以下の内容でお問い合わせを受け付けいたしました。</p>

<div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
  <h3 style="margin-top: 0;">【お問い合わせ内容】</h3>
  <p><strong>お名前:</strong> ${contact.name}</p>
  <p><strong>会社名:</strong> ${contact.company}</p>
  <p><strong>メールアドレス:</strong> ${contact.email}</p>
  <p><strong>お問い合わせ内容:</strong><br>${contact.message.replace(/\n/g, '<br>')}</p>
</div>

<p>内容を確認の上、担当者より改めてご連絡させていただきます。<br>
お急ぎの場合は、お電話にてお問い合わせください。</p>

<p>なお、このメールは自動返信メールとなっております。<br>
お問い合わせに対する回答ではございませんので、ご了承ください。</p>

<p style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
知的探求HUB
</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Auto-reply email sent successfully:', info.messageId);
  } catch (error: unknown) {
    console.error('Error sending auto-reply email:', error);
    throw new Error('Failed to send auto-reply email: ' + (error as Error).message);
  }
}
