const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', { text: DataTypes.STRING }, {});
  Message.associate = (models) => {
    Message.belongsTo(models.User, { as: 'author', foreignKey: 'authId', targetKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
  };
  return message;
};

export default message;
