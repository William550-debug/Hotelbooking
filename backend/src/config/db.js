import mongoose from 'mongoose'





const ConnectDb = async () => {
    try{

        //Helpful for debugging queries
        mongoose.set('debug', true);


        //Strict Query Mode
        mongoose.set('strictQuery', true)


        //Log a successful connection
        mongoose.connection.on('connected', () => {
            console.log("MongoDb connected")

        })

        //handle disconnection
        mongoose.connection.on('disconnected', ()=> {
            console.log("MongoDb disconnected Reconnecting..........")
            
        })

        mongoose.connection.on('error', (err)=> {
            console.error("Mongo Db Connection Error")
        })

        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        


    } catch( error){

        console.error(error.message, "Initial Connection Failed  Exiting .......")
        process.exit(1);
        
    }
}


export default ConnectDb;