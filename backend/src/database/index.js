import knex from 'knex';
import dbConfig from '../../knexfile';

export const connection = knex(dbConfig.development);
