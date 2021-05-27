import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`mongodb connected: ${db.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`error: ${err.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
