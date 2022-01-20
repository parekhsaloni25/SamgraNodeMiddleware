import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { HolidayDto } from './dto/holiday.dto';
import { HolidayResponseDto } from './dto/holiday-response.dto';
import { HolidaySearchDto } from './dto/holiday-search.dto ';
export declare class HolidayService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(holidayId: string): Promise<Observable<HolidayDto>>;
    createHoliday(holidayDto: HolidayDto): Promise<Observable<HolidayResponseDto>>;
    updateHoliday(holidayId: string, holidayDto: HolidayDto): Promise<Observable<HolidayResponseDto>>;
    searchHoliday(holidaySearchDto: HolidaySearchDto): Promise<Observable<any>>;
    findHolidayByYear(yearInput: String): Promise<Observable<any>>;
    findHolidayByContext(context: String): Promise<Observable<any>>;
    findAll(): Promise<Observable<any>>;
}
