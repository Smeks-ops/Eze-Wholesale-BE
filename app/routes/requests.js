import express from 'express';


const app = express();



app.get('/', (req, res) => {
  res.send('Your fly is open Geller')
})

export default app