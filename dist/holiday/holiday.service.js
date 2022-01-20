"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const holiday_dto_1 = require("./dto/holiday.dto");
const error_response_1 = require("../error-response");
const holiday_response_dto_1 = require("./dto/holiday-response.dto");
const holiday_search_dto_1 = require("./dto/holiday-search.dto ");
let HolidayService = class HolidayService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Holiday`;
    }
    async findById(holidayId) {
        return this.httpService.get(`${this.url}/${holidayId}`)
            .pipe((0, operators_1.map)(response => {
            return new holiday_dto_1.HolidayDto(response.data);
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createHoliday(holidayDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}`, holidayDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new holiday_response_dto_1.HolidayResponseDto({
                holidayId: response.data.result.holiday.osid,
                responseMessage: "Holiday Saved Successfully",
                responseCode: response.data.responseCode
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async updateHoliday(holidayId, holidayDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.put(`${this.url}/${holidayId}`, holidayDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new holiday_response_dto_1.HolidayResponseDto({
                holidayId: response.data.result.holiday.osid,
                responseMessage: "Holiday Updated Successfully",
                responseCode: response.data.responseCode
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async searchHoliday(holidaySearchDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}/search`, holidaySearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new holiday_dto_1.HolidayDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async findHolidayByYear(yearInput) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            year: {
                "eq": yearInput
            }
        };
        var holidaySearchDto = new holiday_search_dto_1.HolidaySearchDto({
            filters: searchFilter
        });
        return this.httpService.post(`${this.url}/search`, holidaySearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new holiday_dto_1.HolidayDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    async findHolidayByContext(context) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            context: {
                "eq": context
            }
        };
        var holidaySearchDto = new holiday_search_dto_1.HolidaySearchDto({
            filters: searchFilter
        });
        return this.httpService.post(`${this.url}/search`, holidaySearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new holiday_dto_1.HolidayDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    async findAll() {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {};
        var holidaySearchDto = new holiday_search_dto_1.HolidaySearchDto({
            filters: searchFilter
        });
        return this.httpService.post(`${this.url}/search`, holidaySearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new holiday_dto_1.HolidayDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
};
HolidayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HolidayService);
exports.HolidayService = HolidayService;
//# sourceMappingURL=holiday.service.js.map