import { connection } from '../../database';

class IncidentsController {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  }

  async store(req, res) {
    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }
}

export default new IncidentsController();
