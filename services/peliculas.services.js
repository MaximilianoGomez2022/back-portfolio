import { MongoClient, ObjectId} from "mongodb"
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerDestacadas(){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').find({destacada:true}).toArray()
    })
    .catch(function(err){

    })
}

async function traerPeliculas(filter){

    const filterQuery =  {
        ...filter
    }

    if(filterQuery.genero) {
        filterQuery.genero = {$regex : filterQuery.genero, $options: 'i'}
    } 

    return client.connect()
    .then(async function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').find(filterQuery).toArray()
    })
}

async function traerPorId(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').findOne({ _id: new ObjectId(id) })
    })
}

async function guardarPelicula(pelicula){
    const nuevaPelicula = {
        ...pelicula
    }
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').insertOne(nuevaPelicula)
    })
    .then(function(){
        return nuevaPelicula
    })
}

async function editarPelicula(id, pelicula){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').updateOne({_id: new ObjectId(id)}, {$set:pelicula})
    })
}

async function reemplazarPelicula(id, pelicula){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').replaceOne({_id: new ObjectId(id)},pelicula)
    })
}

async function eliminarPelicula(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH_P3')
        return db.collection('Peliculas').deleteOne({_id: new ObjectId(id)})
    })
}

export{
    traerPeliculas,
    traerDestacadas,
    traerPorId,
    guardarPelicula,
    editarPelicula,
    reemplazarPelicula,
    eliminarPelicula
}