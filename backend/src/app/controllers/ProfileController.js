import { connection } from '../../database';

class ProfileController {
  /**
   * List all the incidents of an ong
   */
  async index(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res
        .status(401)
        .json({ error: 'Access not allowed! Required Login' });
    }

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
