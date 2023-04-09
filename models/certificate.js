
module.exports = (sequelize,DataTypes)=>{

const Certificate = sequelize.define('Certificate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'certificates',
  })
  return Certificate
};