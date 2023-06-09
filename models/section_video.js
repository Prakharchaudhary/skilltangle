
module.exports = (sequelize,DataTypes)=>{

    const sectionVideo = sequelize.define('section_video', {
      video_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      section_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      curriculum_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      video_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
        get() {
          const duration = this.getDataValue('duration');
          if (duration) {
            const [hours, minutes, seconds] = duration.split(':');
            return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
          }
          return null;
        },
        set(duration) {
          if (duration) {
       
            this.setDataValue('duration', duration);
          }
        },
      },
      
      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    }, {
      tableName: 'section_video',
      timestamps: false,
    });
    
    sectionVideo.beforeCreate((sectionVideo, options) => {
        // Set the position to the current number of videos in the section plus one
        return sectionVideo.constructor.findAll({
          where: {
            section_id: sectionVideo.section_id,
          },
          transaction: options.transaction,
        }).then(videos => {
          sectionVideo.position = videos.length + 1;
        });
      });
      
      
    
    return sectionVideo;
    
  }