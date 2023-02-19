import {NestFactory} from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { config } from "process";
import { AppModule } from "./app.module";




async function start() {
const PORT = process.env.PORT || 5000;
const app = await NestFactory.create(AppModule)

const config = new DocumentBuilder()
.setTitle('BACKEND DOCUMENT')
.setDescription('DOCUMENT REST API')
.setVersion('1.0.0')
.addTag('ULBI TV')
.build()
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/api/docs', app, document)

 await app.listen(PORT,  () => console.log(`server started on port = ${PORT}`))
 }

start()