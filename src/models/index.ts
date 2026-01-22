import sequelize from '../config/database';
import Student from './student.model';

const db = {
	sequelize,
	Student,
};

export const startDatabase = async (): Promise<void> => {
	try {
		await sequelize.authenticate();
		console.log('✅ MySQL connected via Sequelize');

		await sequelize.sync({ alter: false }); // dev only
		console.log('📦 Models synced');
	} catch (error) {
		console.error('❌ DB initialization failed:', error);
		process.exit(1);
	}
};

export default db;
