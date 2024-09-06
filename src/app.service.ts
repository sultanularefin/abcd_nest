import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {



  get_logs =(message:string)=>{

    console.log(message);


    return;
  }



  getHello(): string {

    this.get_logs("Hello");
    return 'Hello World! 2024';
  }
}
