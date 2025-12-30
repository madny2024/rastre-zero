export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { id } = req.query;
    if (!id) return res.status(400).json([]);
    const trail = (global.pings && global.pings[id]) || [];
    return res.status(200).json(trail);
  }