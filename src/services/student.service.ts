import Student from '../models/student.model';
import { StudentDTO } from '../dtos/student.dto';
import { AppError } from '../utils/error.util';

export const create = async (payload: StudentDTO) => {
	if (!payload) {
		throw new AppError(400, 'Invalid payload');
	}

	const existingStudent = await Student.findOne({
		where: { email: payload.email },
	});

	if (existingStudent) {
		throw new AppError(409, 'Student already exists');
	}

	// 🔑 Explicit mapping (this fixes TypeScript error)
	const student = await Student.create({
		name: payload.name,
		email: payload.email,
		address: payload.address,
		image: payload.image,
	});

	return student;
};
