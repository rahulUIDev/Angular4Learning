import {Injectable} from '@angular/core';

export enum LogLevel{
     All = 0,
     Debug = 1,
     Info = 2,
     Warn = 3,
     Error = 4,
     Fatal = 5,
     Off = 6
}

@Injectable()
export class LogService {

      level: LogLevel = LogLevel.All;

      logWithDate: boolean = true;

      private shouldLog(level: LogLevel) : boolean{

           let ret: boolean = false;

           if(this.level !== LogLevel.Off && level >= this.level){

               ret = true;

           }

           return ret;
      }

      private writeToLog(msg: string, level: LogLevel){

        if(this.shouldLog(level)) {

            let value: string = '';

            if(this.logWithDate){
                value = new Date() + ' - '
            }

            value += 'Type:' + LogLevel[level];
            value += 'Message:' + JSON.stringify(msg);

            console.log(value);

        }
      }

      log(msg: any){

        console.log(new Date()+': '+JSON.stringify(msg));

      }


}
