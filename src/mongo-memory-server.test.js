const { MongoMemoryServer } = require('mongodb-memory-server');

async function bootstrap() {
    // This will create an new instance of "MongoMemoryServer" and automatically start it
    const mongod = new MongoMemoryServer({
        instance: { debug: true },
        binary: { version: '4.2.14', debug: true },
        debug: true,
    });

    const uri = await mongod.getUri();

    console.log(uri);
}

bootstrap();
