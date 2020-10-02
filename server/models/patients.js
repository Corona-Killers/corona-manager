'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Patients.init({
    name: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    hospitalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patients',
  });
  return Patients;
};