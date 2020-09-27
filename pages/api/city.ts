import { NextApiRequest, NextApiResponse } from 'next';
import { open, Database, Statement } from 'sqlite'
import sqlite3 from 'sqlite3';
import { CityDTO } from '../../dtos/city.dto';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await open({ filename: '../../mydb.sqlite', driver: sqlite3.Database });
  // await db.migrate({ force: true })
  switch (req.method) {
    case 'GET':
      return fetchCities(req, res, db);
    case 'POST':
      // Required Params - {city: string}
      return addCity(req, res, db);
    case 'PUT':
      // Required Params - {city: string}
      return updateCity(req, res, db);
    case 'DELETE':
      // Required Params - { query: {id: string}}
      return deleteCity(req, res, db);
    default:
      res.status(404).json({ msg: "API not found" })
  }
}
async function deleteCity(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).send({ msg: 'Requires id field' })
    }
    const deletion = await db.run(`DELETE FROM City WHERE id='${id}'`)
    if (deletion.changes === 1) {
      return res.status(200).send('Successful');
    }
    return res.status(500).json({ msg: 'Could not delete the specified user' })
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error')
  }
}
async function updateCity(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const city: CityDTO = req.body;
    if (!city) {
      return res.status(400).json({ msg: 'City is required' })
    }
    const cities = await db.run(`UPDATE City SET name='${city.name}' WHERE id = '${city.id}'`)
    if (cities.changes === 1) {
      return res.json(city);
    }
    return res.status(500).send('Server Error')

  } catch (err) {
    console.log('Error occurred', err);
    res.status(500).send('Server Error')
  }
}
async function fetchCities(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const cities = await db.all('SELECT * FROM city');
    return res.json(cities)
  } catch (err) {
    res.status(500).send("Server Error")
  }

}
async function addCity(req: NextApiRequest, res: NextApiResponse, db: Database) {
  try {
    const city: CityDTO = req.body;
    if (!city) {
      res.status(400).json({ err: 'Bad Request' })
    }
    const insertOp = await db.run(`INSERT INTO City (name) values ('${city.name}') `);
    const id = insertOp.lastID
    return res.json({ id, name: city.name })
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Could not insert into the database" })
  }
}