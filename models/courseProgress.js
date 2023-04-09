



module.exports = (sequelize,DataTypes)=>{


const CourseProgress = sequelize.define('CourseProgress', {
    CourseProgress_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  video_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  watched_duration_seconds: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
    tableName: 'CourseProgress',
    timestamps: false,
  
});
return CourseProgress
}

