const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING }, {});
  User.associate = (models) => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
  };
  return User;
};

export default user;
