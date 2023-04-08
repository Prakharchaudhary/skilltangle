module.exports = (sequelize, DataTypes,student,course) => {
    const cartItem = sequelize.define('cartitem', {
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
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      
    }, {
      timestamps: false,
    });
  
    return cartItem;
  };
  