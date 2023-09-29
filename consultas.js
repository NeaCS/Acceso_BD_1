const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "naldi1291",
  database: "likeme",
  allowExitOnIdle: true,
});

const obtenerPosts = async () => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.error(err);
  }
};
 
  const agregarPost = async (titulo, img, descripcion) => {
  try {
    const consulta = "INSERT INTO posts (titulo, img, descripcion) values ( $1, $2, $3)";
    const valores = [titulo, img, descripcion];
    const result = await pool.query(consulta, valores);
    console.log("post agregado");
  } catch (error) {
    console.log(error);
  }};   


module.exports = {
  obtenerPosts,
  agregarPost,
};
