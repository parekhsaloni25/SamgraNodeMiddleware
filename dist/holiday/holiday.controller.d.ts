import { HolidaySearchDto } from "./dto/holiday-search.dto ";
import { HolidayDto } from "./dto/holiday.dto";
import { HolidayService } from "./holiday.service";
export declare class HolidayController {
    private readonly holidayService;
    constructor(holidayService: HolidayService);
    getHolidayById(holidayId: string): Promise<import("rxjs").Observable<HolidayDto>>;
    findAll(): Promise<import("rxjs").Observable<any>>;
    createHoliday(holidayDto: HolidayDto): Promise<import("rxjs").Observable<import("./dto/holiday-response.dto").HolidayResponseDto>>;
    updateHoliday(holidayId: string, holidayDto: HolidayDto): Promise<import("rxjs").Observable<import("./dto/holiday-response.dto").HolidayResponseDto>>;
    searchHoliday(holidaySearchDto: HolidaySearchDto): Promise<import("rxjs").Observable<any>>;
    findHolidayByYear(year: String): Promise<import("rxjs").Observable<any>>;
    findHolidayByContext(context: String): Promise<import("rxjs").Observable<any>>;
}
