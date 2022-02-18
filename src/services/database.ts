import Database from '../models/database';
import path from 'path';

/**
 * Connect to database
 */
export const connectDatabase = () => {
  const dataPath = path.join(process.cwd(), 'database', 'users.json');
  const client = new Database(dataPath);
  return client;
};
