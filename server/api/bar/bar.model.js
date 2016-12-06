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
    rating: DataTypes.DOUBLE,
    photoAttributes: DataTypes.JSON,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  };

  const Bar = sequelize.define('Bar', internals.fields, {
    instanceMethods: internals.instance,
    classMethods: internals.static,
    hooks: internals.hooks,
  });

  return Bar;
}
