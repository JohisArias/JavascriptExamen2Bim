/**
 * Libro.js
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
    isbn:{
      type:'number',
      required:true
    },
    numeroPaginas:{
      type:'number',
      required:true
    },
    fechaPublicacion:{
      type:'string',
      required:true
    },
    valor:{
      type:'number',
      required:true
    },
    urlImagen:{
      type:'string',
      required:true
    },
    autorIdFk: {
      model: 'autor'
    }
  }
};

