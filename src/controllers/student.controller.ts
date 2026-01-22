import {
	Controller,
	Post,
	Route,
	SuccessResponse,
	UploadedFile,
	FormField,
	Tags,
	Consumes,
} from 'tsoa';
import * as studentService from '../services/student.service';
import { StudentResponseDTO } from '../dtos/student.dto';

@Route('students')
@Tags('Students')
export class StudentController extends Controller {
	@Post('/')
	@Consumes('multipart/form-data')
	public async createStudent(
		@FormField() name: string,
		@FormField() email: string,
		@FormField() address: string,
		@UploadedFile() image?: Express.Multer.File
	): Promise<{ success: boolean; data: StudentResponseDTO }> {
		const result = await studentService.create({
			name,
			email,
			address,
			image: image ? image.filename : undefined,
		});

		return {
			success: true,
			data: {
				id: result.id,
				name: result.name,
				email: result.email,
				address: result.address,
				image: result.image,
			},
		};
	}
}
