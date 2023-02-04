import express, {Express, Response, Request}  from "express";

const app = express()

const PORT = 5000;

app.use('/home', (req, res) =>{
  res.send("Hello world")
})

app.use('/about', (req, res) =>{
  res.send("Hello about")
})

app.use('/contact-me', (req, res) =>{
  res.send("Contact-me")
})

app.use('/message', (req, res) =>{
  const message = {
    user: 'Ryuk',
    age: 9,
    breed: 'mix',
    friends: [
      'Ora',
      'Blonder',
      'Perrita del metro',
      'Perrita de toyo tachira',
      'Funcionario publico'
    ]
  }
  res.send(message)
})

app.listen(PORT, () =>{
  console.log(`Hello typescript, listening to port: ${PORT}`);
})


