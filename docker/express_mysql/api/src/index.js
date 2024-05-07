const express = require('express')
const cors = require('cors') // Importa el módulo de CORS


const {
  getAllBlogs, createBlog, deleteBlog, update, getBlog,
} = require('./db.js')

const app = express()
const port = 3611
// This line is necessary to parse the request body
app.use(express.json())


// cors options for development
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/', (req, res) => {
  res.send('Estas dentro de la api!')
})


app.get('/blogs', async (req, res) => {
  try {
    const blogs = await getAllBlogs()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).send('Error interno del servidor')
  }
})

// eslint-disable-next-line consistent-return
app.get('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params
    const blogs = await getBlog(id)
    if (blogs.length === 0) {
      return res.status(404).send('Blog not found')
    }
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

// eslint-disable-next-line consistent-return
app.post('/blogs', async (req, res) => {
  try {
    // eslint-disable-next-line max-len
    const [title, author, content, imagen] = [req.body.title, req.body.author, req.body.content, req.body.imagen]
    if (!title || !author || !content || !imagen) {
      return res.status(400).send('Falta título o contenido en la solicitud')
    }
    console.log(title, author, content, imagen)
    const blogs = await createBlog(title, author, content, imagen)
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'error creating the character' })
  }
})

// put method to update a blog
// eslint-disable-next-line consistent-return
app.put('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params
    // eslint-disable-next-line max-len
    const [title, author, content, imagen] = [req.body.title, req.body.author, req.body.content, req.body.imagen]
    if (!title || !author || !content || !imagen) {
      return res.status(400).send('Falta título o contenido en la solicitud')
    }
    const blogs = await update(id, title, author, content, imagen)
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

app.delete('/blogs/:id', async (request, response) => {
  try {
    console.log('delete blog')
    const { id } = request.params
    console.log(id)
    const result = await deleteBlog(id)
    response.status(200).json(result)
  } catch (error) {
    response.status(500).json({ message: 'error deleting the character' })
  }
})

// Middleware para manejar métodos HTTP no implementados
app.use((req, res) => {
  res.status(501).send('Método HTTP no implementado')
})

app.use((req, res) => {
  res.status(400).send('no endpoint was found')
})

