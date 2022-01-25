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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const teacher_dto_1 = require("./dto/teacher.dto");
const error_response_1 = require("./../error-response");
const teacher_response_dto_1 = require("./dto/teacher-response.dto");
const teacher_search_dto_1 = require("./dto/teacher-search.dto ");
let TeacherService = class TeacherService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Teacher`;
    }
    async findById(teacherId) {
        return this.httpService.get(`${this.url}/${teacherId}`)
            .pipe((0, operators_1.map)(response => {
            return new teacher_dto_1.TeacherDto(response.data);
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createTeacher(teacherDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}`, teacherDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new teacher_response_dto_1.TeacherResponseDto({
                teacherId: response.data.result.teacher.osid,
                responseMessage: "Teacher Saved Successfully",
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
    async updateTeacher(teacherId, teacherDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.put(`${this.url}/${teacherId}`, teacherDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new teacher_response_dto_1.TeacherResponseDto({
                teacherId: response.data.result.teacher.osid,
                responseMessage: "Teacher Updated Successfully",
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
    async searchTeacher(teacherSearchDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}/search`, teacherSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new teacher_dto_1.TeacherDto(item);
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
    async findTeacherBySubject(subjectId) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            subjectId: {
                "eq": subjectId
            }
        };
        var teacherSearchDto = new teacher_search_dto_1.TeacherSearchDto({
            filters: searchFilter
        });
        console.log(teacherSearchDto);
        return this.httpService.post(`${this.url}/search`, teacherSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new teacher_dto_1.TeacherDto(item);
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
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map