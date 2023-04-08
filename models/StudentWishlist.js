module.exports = (sequelize, DataTypes,student,course) => {
    const wishlistItem = sequelize.define('wishlist', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: student,
          key: 'student_id',
        },
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: course,
          key: 'course_id',
        },
      }, 
      
      
    }, {
      timestamps: false,
    });
  
    return wishlistItem;
  };
  