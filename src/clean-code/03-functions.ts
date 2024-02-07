(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioByid ( ActorId: string ) {
        console.log({ ActorId });
    }
    

    interface Movie  {
    cast: string[] 
    description: string;
    rating: number;
    title: string;
    }
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // ! its better to create a new function that takes care of verifying the name and using it in the function below 
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        
    }

// continued 
//   const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
//         let result;
//         if ( isDead ) {
//             result = 1500;
//         } else {
//             if ( isSeparated ) {
//                 result = 2500;
//             } else {
//                 if ( isRetired ) {
//                     result = 3000;
//                 } else {
//                     result = 4000; 
//                 }
//             }
//         }
        
//         return result;
//     }

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {

    if ( isDead ) return 1500;

    if ( isSeparated ) return 2500;

    return ( isRetired ) ? 3000 : 4000; 

    }
})();
