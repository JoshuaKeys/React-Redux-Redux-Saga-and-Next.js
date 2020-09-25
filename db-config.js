const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ force: 'last' });

  const city = await db.all('SELECT * from city');
  console.log(city);
}
setup();
