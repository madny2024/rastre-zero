export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ lat: -23.5505, lng: -46.6333 });
  }
  