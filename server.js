import app from './app/routes/requests.js';
import consola from 'consola';


const PORT = process.env.PORT || 7000



app.listen(PORT, () => {
  consola.success(`server running on port ${PORT}`)
})