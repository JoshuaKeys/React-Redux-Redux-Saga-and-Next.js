import { NextApiRequest, NextApiResponse } from 'next';
import { open, Database, Statement } from 'sqlite'
import sqlite3 from 'sqlite3';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await open({ filename: '../../mydb.sqlite', driver: sqlite3.Database });
  await db.migrate({ force: true })
  switch (req.method) {
    case 'GET':
      return fetchCities(req, res, db);
    default:
      res.status(404).json({ msg: "API not found" })
  }
}

async function fetchCities(req: NextApiRequest, res: NextApiResponse, db: Database) {
  const cities = await db.all('SELECT * FROM city');
  console.log(cities);
  return res.json(cities)
}