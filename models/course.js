module.exports = (sequelize,DataTypes)=>{


const Course = sequelize.define('course', {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    requirement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },{
    tableName: 'course',
    timestamps: false,
  })
  return Course
};