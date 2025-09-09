export default async function handler(req, res) {
    const {
        query: { id },
    } = req;

    try {
        const response = await fetch(`https://api.deezer.com/album/${id}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar álbum' });
    }
}
