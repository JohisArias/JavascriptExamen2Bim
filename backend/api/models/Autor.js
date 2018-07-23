/**
 * Autor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    apellidos:{
      type:'string',
      required:true
    },
    fechaNacimiento:{
      type:'string',
      required:true
    },
    numeroLibros:{
      type:'number',
      required:true
    },
    urlImagen:{
      type:'string',
      required:true
    },

    libros: {
      collection: 'libro',
      via: 'autorIdFk'
    }
  }//fin atributes
};
