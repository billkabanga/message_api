const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', { username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return user;
};

export default User;
