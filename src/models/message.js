const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', { text: DataTypes.STRING }, {});
  Message.associate = (models) => {
    Message.belongsTo(models.User);
  };
  return message;
};

export default message;
