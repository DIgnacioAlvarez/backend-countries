const server = require("./src/app")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})