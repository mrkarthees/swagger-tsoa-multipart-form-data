import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

class Student extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public address!: string;
	public image?: string;
}

Student.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},

		email: {
			type: DataTypes.STRING(150),
			allowNull: false,
			validate: { isEmail: true },
		},

		address: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: 'students',
		modelName: 'Student',
		timestamps: true,
	}
);

export default Student;
