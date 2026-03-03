import type { APIRoute } from 'astro';

export const prerender = false;

const WEBHOOK_URL = 'https://n8n-delipe-n8n.mogwag.easypanel.host/webhook/api/email';
const RECIPIENT  = 'contato@lifeconnectionsbr.com.br';

function buildHtml(body: Record<string, string>) {
  return `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background:#f4f4f4; margin:0; padding:0; }
    .container { max-width:600px; margin:32px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
    .header { background:#1a7a2a; padding:32px; text-align:center; }
    .header img { height:60px; }
    .header h1 { color:#fff; font-size:22px; margin:12px 0 0; }
    .body { padding:32px; }
    .body h2 { font-size:18px; color:#1a7a2a; border-bottom:2px solid #e8f5e9; padding-bottom:8px; }
    .field { margin:16px 0; }
    .field label { display:block; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:#888; margin-bottom:4px; }
    .field span { display:block; font-size:15px; color:#222; font-weight:600; }
    .badge { display:inline-block; background:#e8f5e9; color:#1a7a2a; border-radius:99px; padding:4px 14px; font-size:13px; font-weight:700; }
    .footer { background:#f9f9f9; padding:20px 32px; text-align:center; font-size:12px; color:#999; border-top:1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 Novo Contato pelo Site</h1>
    </div>
    <div class="body">
      <h2>Dados do Contato</h2>

      <div class="field">
        <label>Nome</label>
        <span>${body.nome || '—'}</span>
      </div>

      <div class="field">
        <label>E-mail</label>
        <span><a href="mailto:${body.email}" style="color:#1a7a2a;">${body.email || '—'}</a></span>
      </div>

      <div class="field">
        <label>Telefone / WhatsApp</label>
        <span><a href="https://wa.me/55${(body.telefone || '').replace(/\D/g,'')}" style="color:#1a7a2a;">${body.telefone || '—'}</a></span>
      </div>

      <div class="field">
        <label>Endereço</label>
        <span>${body.endereco || '—'}</span>
      </div>

      <div class="field">
        <label>Área de Interesse</label>
        <span class="badge">${body.area || '—'}</span>
      </div>
    </div>
    <div class="footer">
      Life Connections · lifeconnectionsbr.com.br · 0800 333 4321
    </div>
  </div>
</body>
</html>
  `.trim();
}

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string> = {};

  try {
    body = await request.json();
  } catch {
    return json({ success: false, message: 'Corpo da requisição inválido.' }, 400);
  }

  // Validação mínima
  if (!body.nome || !body.email || !body.telefone || !body.area) {
    return json({ success: false, message: 'Campos obrigatórios ausentes.' }, 422);
  }

  const emailData = {
    body: {
      email:   RECIPIENT,
      subject: `[Life Connections] Novo contato: ${body.nome} — ${body.area}`,
      text:    buildHtml(body),
    },
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(emailData),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[API] Webhook retornou erro:', response.status, detail);
      return json({ success: false, message: 'Falha ao enviar o e-mail.' }, 502);
    }

    console.log('[API] E-mail enviado para', RECIPIENT);
    return json({ success: true, message: 'E-mail enviado com sucesso.' }, 200);

  } catch (err) {
    console.error('[API] Erro ao chamar webhook:', err);
    return json({ success: false, message: 'Erro interno ao enviar o e-mail.' }, 500);
  }
};

function json(data: object, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
