import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigDto} from './dto/config.dto';
import { ErrorResponse } from './../error-response';
import { ConfigResponseDto } from './dto/config-response.dto';
import { ConfigSearchDto } from './dto/config-search.dto';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

@Injectable()
export class ConfigService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Config`;

  
  public async findById(configId: string)  {
    return this.httpService.get(`${this.url}/${configId}`)
    .pipe(
        map(response => {
          return new ConfigDto(response.data) 
      }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
  }


  public async createConfig(configDto: ConfigDto) {
    const headersRequest  = {
      'Content-Type': 'application/json', 
    };
      return this.httpService.post(`${this.url}`,configDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new ConfigResponseDto( {
              configId: response.data.result.config.osid,
              responseMessage : "Config Saved Successfully",
              responseCode : response.data.responseCode
            })
        }),
          catchError(e => {
            console.log(e.response.data)
            var error = new ErrorResponse({
              errorCode : e.response.status,
              errorMessage : e.response.data.params.errmsg
            })
            throw new HttpException(error, e.response.status);
          })
      );
  }


  public async updateConfig(configId:string,configDto: ConfigDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.put(`${this.url}/${configId}`,configDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new ConfigResponseDto( {
            configId: response.data.result.config.osid,
            responseMessage : "Config Updated Successfully",
            responseCode : response.data.responseCode
          })
      }),
        catchError(e => {
          console.log(e.response.data)
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
}

public async searchConfig(configSearchDto: ConfigSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,configSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new ConfigDto(item)
            
        });
       
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(error, e.response.status);
      })
  );

 
}

public async findConfigByKey(key: String) {
  const headersRequest  = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    key : {
     "eq" : key
    }
  }
  var configSearchDto = new ConfigSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,configSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new ConfigDto(item)
          
      });
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(e.response.data, e.response.status);
      })
  );
}

public async findConfigByContext(context: String) {
  const headersRequest  = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    context : {
     "eq" : context
    }
  }
  var configSearchDto = new ConfigSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,configSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new ConfigDto(item)
          
      });
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(e.response.data, e.response.status);
      })
  );
}


public async findAll() {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    
  }
  var configSearchDto = new ConfigSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,configSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new ConfigDto(item)
          
      });
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(e.response.data, e.response.status);
      })
  );
}

}

class DbConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: this.isProduction(),
    };
  }

}

const dbConfigService = new DbConfigService(process.env)
  .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
  ]);

export { dbConfigService };
