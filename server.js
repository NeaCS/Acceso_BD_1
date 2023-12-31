const express = require("express");
const app = express();
const cors = require("cors");
const { obtenerPosts, agregarPost, modificarPost, borrarPost } = require("./consultas");

app.listen(3000, console.log("servidor encendido en el servidor 3000"));

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
  const { titulo, img, descripcion } = req.body;
  try {
    await agregarPost(titulo, img, descripcion);
    res.send("post agregado");
  } catch (err) {
    console.error(`Ocurrió el siguiente error ${err}`);
  }
});

app.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await modificarPost(id);
    res.send("post modificado");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await borrarPost(id);
    res.send("post eliminado");
  } catch (err) {
    res.status(500).send(err);
  }
})
