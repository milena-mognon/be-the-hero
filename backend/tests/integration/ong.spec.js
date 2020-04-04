import request from 'supertest';
import app from '../../src/app';
import { connection } from '../../src/database';

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'NOVA ONG',
        email: 'ong@mail.com',
        whatsapp: '42 33333333',
        city: 'Guarapuava',
        uf: 'pr',
      });
    // expect(response.body).toHaveProperty('id');
    // expect(response.body.id).toHaveLength(8);
  });
});
