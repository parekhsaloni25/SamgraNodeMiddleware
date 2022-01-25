import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { ConfigDto } from './dto/config.dto';
import { ConfigResponseDto } from './dto/config-response.dto';
import { ConfigSearchDto } from './dto/config-search.dto ';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class ConfigService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(configId: string): Promise<Observable<ConfigDto>>;
    createConfig(configDto: ConfigDto): Promise<Observable<ConfigResponseDto>>;
    updateConfig(configId: string, configDto: ConfigDto): Promise<Observable<ConfigResponseDto>>;
    searchConfig(configSearchDto: ConfigSearchDto): Promise<Observable<any>>;
    findConfigByKey(key: String): Promise<Observable<any>>;
    findConfigByContext(context: String): Promise<Observable<any>>;
    findAll(): Promise<Observable<any>>;
}
declare class DbConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    isProduction(): boolean;
    getTypeOrmConfig(): TypeOrmModuleOptions;
}
declare const dbConfigService: DbConfigService;
export { dbConfigService };
