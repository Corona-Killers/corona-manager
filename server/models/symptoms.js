'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symptoms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(model.Patient, {through: 'symptomsByPatients' , foreignKey: 'patientId' , as: 'patientList'});
    }
  };
  Symptoms.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Symptoms',
  });
  return symptoms;
};