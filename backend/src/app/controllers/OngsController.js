import crypto from 'crypto';
import { connection } from '../../database';
import * as Yup from 'yup';

class OngsController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      whatsapp: Yup.string()
        .required()
        .max(11),
      city: Yup.string().required(),
      uf: Yup.string()
        .required()
        .max(2),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    res.json(id);
  }
}

export default new OngsController();
