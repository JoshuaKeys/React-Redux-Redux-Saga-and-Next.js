import { NextApiRequest, NextApiResponse } from 'next';
import { open, Database, Statement } from 'sqlite'
import sqlite3 from 'sqlite3';
import get from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return fetchCityWeather(req, res);
        default:
            res.status(404).json({ msg: "API not found" })
    }
}

async function fetchCityWeather(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;

    const { data } = await get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=${apiKey}&lang=${req.query.lang}&units=${req.query.units}`)
    // const data = await get('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=75fa1662ba99cafe6e0bd9a7322b056a')
    return res.json(data)
}