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
exports.AttendanceDto = void 0;
const class_transformer_1 = require("class-transformer");
class AttendanceDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.attendanceRecordId = `${this.osid}`;
        this.date = `${this.date}` == null || undefined || 'undefined' ? "" : `${this.date}`;
        this.isApproved = `${this.isApproved}` == null || undefined || 'undefined' ? "" : `${this.isApproved}`;
        this.attendance = `${this.attendance}` == null || undefined || 'undefined' ? "" : `${this.attendance}`;
        this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}`;
        this.studentId = `${this.studentId}` == null || undefined || 'undefined' ? "" : `${this.studentId}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}`;
        this.remark = `${this.remark}` == null || undefined || 'undefined' ? "" : `${this.remark}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "attendanceRecordId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "studentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "classId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "isApproved", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "attendance", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AttendanceDto.prototype, "remark", void 0);
exports.AttendanceDto = AttendanceDto;
//# sourceMappingURL=attendance.dto.js.map