const mongose=require("mongose");

async function connectMogoDb(){

    return 
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1');
}

module.export={
    connectMongoDb,
};