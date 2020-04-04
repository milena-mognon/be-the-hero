import { connection } from '../../database';
import * as Yup from 'yup';

class IncidentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);
    return res.json(incidents);
  }

  async store(req, res) {
    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;

    const ong_id = req.headers.authorization;

    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res
        .status(400)
        .json({ error: 'The incident ID must be a number' });
    }

    if (!ong_id) {
      return res
        .status(401)
        .json({ error: 'Access not allowed! Required Login' });
    }

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not allowed' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  }
}

export default new IncidentsController();
