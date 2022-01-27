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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const attendance_dto_1 = require("./dto/attendance.dto");
const attendance_response_dto_1 = require("./dto/attendance-response.dto");
const attendance_search_dto_1 = require("./dto/attendance-search.dto ");
const error_response_1 = require("./../error-response");
let AttendanceService = class AttendanceService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Attendance`;
    }
    async findById(attendanceId) {
        return this.httpService.get(`${this.url}/${attendanceId}`)
            .pipe((0, operators_1.map)(response => {
            return new attendance_dto_1.AttendanceDto(response.data);
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createAttendance(attendanceDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}`, attendanceDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new attendance_response_dto_1.AttendanceResponseDto({
                attendanceRecordId: response.data.result.attendance.osid,
                responseMessage: "Attendance Saved Successfully",
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
    async updateAttendance(attendanceId, attendanceDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.put(`${this.url}/${attendanceId}`, attendanceDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new attendance_response_dto_1.AttendanceResponseDto({
                attendanceRecordId: response.data.result.attendance.osid,
                responseMessage: "Attendance Updated Successfully",
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
    async searchAttendance(attendanceSearchDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}/search`, attendanceSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new attendance_dto_1.AttendanceDto(item);
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
    async findAttendanceByClass(searchClassId, fromDate, toDate) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            classId: {
                "eq": searchClassId
            }
        };
        var attendanceSearchDto = new attendance_search_dto_1.AttendanceSearchDto({
            filters: searchFilter
        });
        console.log(attendanceSearchDto);
        return this.httpService.post(`${this.url}/search`, attendanceSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new attendance_dto_1.AttendanceDto(item);
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
    async findAttendanceByClassAndSubject(classId, subjectId, fromDate, toDate) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            classId: {
                "eq": classId
            }
        };
        var attendanceSearchDto = new attendance_search_dto_1.AttendanceSearchDto({
            filters: searchFilter
        });
        console.log(attendanceSearchDto);
        return this.httpService.post(`${this.url}/search`, attendanceSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new attendance_dto_1.AttendanceDto(item);
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
AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AttendanceService);
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map