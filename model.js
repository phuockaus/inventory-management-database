const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventory',
    password: 'phuockaus0412',
    port: 4000,
});

const getUser = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT username, password FROM public.\"USER\";',
      (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);       
      })
    }) 
  }

  const getStock = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT P.id, P.title as name, C.title as category, S.available, S.price FROM public.\"CATEGORY\" as C, public.\"PRODUCT\" as P, public.\"PRO_CATE\" as PC, public.\"STOCK\" as S WHERE P.id = PC.product_id AND C.id = PC.category_id AND S.product_id = P.id;', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
module.exports = {getUser, getStock};