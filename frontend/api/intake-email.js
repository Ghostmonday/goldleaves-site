import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, projectType, budget, description, company_name } = req.body || {};

    // Honeypot: if filled, pretend success but drop
    if (typeof company_name === 'string' && company_name.trim() !== '') {
      return res.status(200).json({ ok: true, skipped: true });
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !projectType || !budget || !description) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email address' });
    }
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: 'RESEND_API_KEY not configured' });
    }

    const subject = '🟡 New Project Intake – GoldLeaves';
    const html = `
      <h2>New Project Intake</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
      <p><strong>Description:</strong> ${escapeHtml(description)}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'GoldLeaves Intake <projects@goldleaves.cloud>',
      to: ['amirpix@icloud.com'],
      subject,
      html,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ ok: false, error: 'Email send failed' });
    }

    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}