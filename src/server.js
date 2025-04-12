import 'dotenv/config';

import app from './app.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();

