const express = require("express");
const app = express();
const cors = require("cors");
const { obtenerPosts, agregarPost } = require("./consultas");

app.listen(3001, console.log("servidor encendido en el servidor 3001"));

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (err) {
    console.error(err);
  }
});



  app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  try {
    await agregarPost(titulo, url, descripcion);
     res.send('post agregado'); 
  } catch (err) {
    console.error(`Ocurrió el siguiente error ${err}`);
  }
}); 
  
