export default async function handler(req, res) {
    // aceita qualquer origem
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
  
    if (req.method !== 'POST') return res.status(405).end();
  
    const { id, lat, lng, ts } = req.body;
    if (!id || typeof lat !== 'number' || typeof lng !== 'number') {
      return res.status(400).json({ ok: false });
    }
  
    // armazena em memória (volátil – suficiente para teste)
    global.pings = global.pings || {};
    global.pings[id] = global.pings[id] || [];
    global.pings[id].push({ lat, lng, ts: ts || Date.now() });
  
    return res.status(200).json({ ok: true });
  }
  