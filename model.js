const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventory',
    password: 'phuockaus0412',
    port: 4000,
});

const getUSER = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public.\"USER\";', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
module.exports = {getUSER};