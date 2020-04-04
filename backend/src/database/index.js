import knex from 'knex';
import dbConfig from '../../knexfile';

const config =
  process.env.NODE_ENV === 'test' ? dbConfig.test : dbConfig.development;

export const connection = knex(config);
