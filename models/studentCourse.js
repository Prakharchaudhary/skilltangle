module.exports = (sequelize,DataTypes)=>{



const Purchase = sequelize.define('purchase', {
    purchase_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1


    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  
  },{
    timestamps:false
});
  return Purchase
}