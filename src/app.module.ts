import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';




import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/test'),
    // MongooseModule.forRoot('mongodb://root:Gjvuvp2geJj@localhost:27017/test'),
    MongooseModule.forRoot('mongodb://root:Gjvuvp2geJj@localhost:27017/test?authSource=admin'),
    // MONGODB_URI=mongodb://username:password@127.0.0.1/payload-cms?authSource=admin

// mongodb://root:Gjvuvp2geJj@localhost:27017/
    CatsModule,
  ],
})
export class AppModule {}


/*
@Module({
  // imports: [],
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
*/



/*
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionFactory: (connection:any) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),
  ],
})
*/



/*
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost/users', {
      connectionName: 'users',
    }),
  ],
})
 */




/*
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}*/


// export class AppModule {}
