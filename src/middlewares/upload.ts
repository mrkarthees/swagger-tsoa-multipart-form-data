import multer from 'multer';
import path from 'path';

export const upload = multer({
	storage: multer.diskStorage({
		destination: 'uploads/',
		filename: (_req, file, cb) => {
			const ext = path.extname(file.originalname); // .jpg, .png

			const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

			cb(null, `${unique}${ext}`);
		},
	}),
});
