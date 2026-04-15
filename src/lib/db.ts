import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
});

export async function initDb() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('Database initialized: users table ensured.');
  } catch (err) {
    console.error('Error initializing database:', err);
    throw err;
  }
}