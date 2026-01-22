import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes-tsoa/routes';
import { startDatabase } from './models';
import { upload } from './middlewares/upload';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(require('./swagger/swagger.json'))
);

app.use(express.json());
RegisterRoutes(app, {
	multer: upload,
});

app.listen(PORT, async () => {
	try {
		await startDatabase();
		console.log(`🚀 Server running at http://localhost:${PORT}`);
		console.log(`📄 Swagger at http://localhost:${PORT}/docs`);
	} catch (error) {
		console.error('❌ DB connection failed:', error);
	}
});
