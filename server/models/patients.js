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
      this.belongsToMany(model.symptoms, {through: 'symptomsByPatients' , foreignKey: 'symptomId' , as: 'symptomList'});
      this.belongsTo(models.cities, {foreignKey: 'cityId'});
      this.hasMany(models.CovidTests, {foreignKey: 'patientId'});
    }
  };
  Patients.init({
    name: DataTypes.STRING,
    cityId: {
      type: DataTypes.INTEGER,
      field: city_id
    },
    status: DataTypes.STRING,
    hospitalId: {
      type :DataTypes.INTEGER,
      field: 'hospital_id'
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Patients',
  });
  return Patients;
};