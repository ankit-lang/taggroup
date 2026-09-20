import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function main() {
  try {
    console.log('⌛ Verifying connection to the mail server...');
    // This checks if the login credentials and host are correct
    await transporter.verify();
    console.log('✅ Connection successful! Your credentials are correct.\n');

    console.log('⌛ Sending a test email...');
    // This attempts to actually send an email
    const info = await transporter.sendMail({
      from: `"Tag App Team" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'Welcome to your new Tag App account!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">Welcome to Tag!</h2>
          <p>Hi there,</p>
          <p>Thank you for setting up your account. We are thrilled to have you on board.</p>
          <p>If you have any questions, feel free to reply directly to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Tag App Team</strong></p>
        </div>
      `,
      text: 'Welcome to Tag! Thank you for setting up your account. We are thrilled to have you on board.',
    });
    
    console.log(`✅ Test email sent successfully!`);
    console.log(`Message ID: ${info.messageId}`);
    console.log(`\nPlease check the inbox for ${process.env.ADMIN_EMAIL || process.env.EMAIL_USER} to verify it arrived.`);
  } catch (error) {
    console.error('\n❌ ERROR: Something went wrong.');
    console.error(error.message);
  }
}

main();
