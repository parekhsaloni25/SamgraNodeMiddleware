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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const student_dto_1 = require("./dto/student.dto");
const error_response_1 = require("../error-response");
const student_response_dto_1 = require("./dto/student-response.dto");
let StudentService = class StudentService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async findById(studentId) {
        const url = process.env.BASE_URL + '/Student/' + studentId;
        return this.httpService.get(url)
            .pipe((0, operators_1.map)(response => {
            return new student_dto_1.StudentDto(response.data);
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createStudent(studentDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        const url = process.env.BASE_URL + '/Student';
        return this.httpService.post(url, studentDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new student_response_dto_1.StudentResponseDto({
                studentId: response.data.result.student.osid,
                responseMessage: "Student Saved Successfully",
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
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map