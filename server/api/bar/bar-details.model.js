'use strict';

export default function(sequelize, DataTypes) {
  const internals = {
    static: {},
    instance: {},
    hooks: {},
  };

  internals.fields = {
    _id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    formattedAddress: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    website: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
    openingHours: DataTypes.JSON,
    photos: DataTypes.JSON,
    googleUrl: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  };

  const BarDetails = sequelize.define('BarDetails', internals.fields, {
    instanceMethods: internals.instance,
    classMethods: internals.static,
    hooks: internals.hooks,
  });

  return BarDetails;
}
