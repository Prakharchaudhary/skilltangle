
module.exports = (sequelize,DataTypes)=>{

const Section = sequelize.define('section', {
    section_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is required',
        },
      },
    },
    curriculum_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Curriculum ID is required',
        },
      },
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Instructor ID is required',
        },
      },
    },
    
  },{
    tableName: 'section',
    timestamps: false,
  
});
return Section
}
  