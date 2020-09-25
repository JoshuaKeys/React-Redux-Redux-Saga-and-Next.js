import { NextApiRequest, NextApiResponse } from 'next';
import { open, Database, Statement } from 'sqlite'
import sqlite3 from 'sqlite3';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await open({ filename: '../../mydb.sqlite', driver: sqlite3.Database });
  await db.migrate({ force: true })
  switch (req.method) {
    case 'GET':
      return fetchCities(req, res, db);
    case 'POST':
      // Required Params - {city: string}
      return addCity(req, res, db);
    default:
      res.status(404).json({ msg: "API not found" })
  }
}

async function fetchCities(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const cities = await db.all('SELECT * FROM city');
    console.log(cities);
    return res.json(cities)
  } catch (err) {
    res.status(500).send("Server Error")
  }

}
async function addCity(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const { city } = req.body;
    if (!city) {
      res.status(400).json({ err: 'Bad Request' })
    }
    console.log(city)
    const insertOp = await db.run(`INSERT INTO City (name) values ('${city}') `);
    const id = insertOp.lastID
    return res.json({ id, city })
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Could not insert into the database" })
  }
}