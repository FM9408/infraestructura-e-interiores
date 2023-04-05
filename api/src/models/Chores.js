const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('chores', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamp: true,
        createdAt: 'creado',
        updatedAt: 'modificado'
    })
}

