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
exports.StudentDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class StudentDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.studentId = `${this.osid}`;
        this.studentName = `${this.firstName} ${this.lastName}`;
        this.aadhaar = `${this.aadhaar}` == null || undefined || 'undefined' ? "" : `${this.aadhaar}`;
        this.refStudentId = `${this.refStudentId}` == null || undefined || 'undefined' ? "" : `${this.refStudentId}`;
        this.firstName = `${this.firstName}` == null || undefined || 'undefined' ? "" : `${this.firstName}`;
        this.lastName = `${this.lastName}` == null || undefined || 'undefined' ? "" : `${this.lastName}`;
        this.contactNumber = `${this.contactNumber}` == null || undefined || 'undefined' ? "" : `${this.contactNumber}`;
        this.email = `${this.email}` == null || undefined || 'undefined' ? "" : `${this.email}`;
        this.gender = `${this.gender}` == null || undefined || 'undefined' ? "" : `${this.gender}`;
        this.socialCategory = `${this.socialCategory}` == null || undefined || 'undefined' ? "" : `${this.socialCategory}`;
        this.iscwsn = `${this.iscwsn}` == null || undefined || 'undefined' ? "" : `${this.iscwsn}`;
        this.religion = `${this.religion}` == null || undefined || 'undefined' ? "" : `${this.religion}`;
        this.singleGirl = `${this.singleGirl}` == null || undefined || 'undefined' ? "" : `${this.singleGirl}`;
        this.weight = `${this.weight}` == null || undefined || 'undefined' ? "" : `${this.weight}`;
        this.height = `${this.height}` == null || undefined || 'undefined' ? "" : `${this.height}`;
        this.bloodGroup = `${this.bloodGroup}` == null || undefined || 'undefined' ? "" : `${this.bloodGroup}`;
        this.birthDate = `${this.birthDate}` == null || undefined || 'undefined' ? "" : `${this.birthDate}`;
        this.homeless = `${this.homeless}` == null || undefined || 'undefined' ? "" : `${this.homeless}`;
        this.bpl = `${this.bpl}` == null || undefined || 'undefined' ? "" : `${this.bpl}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}`;
        this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}`;
        this.migrant = `${this.migrant}` == null || undefined || 'undefined' ? "" : `${this.migrant}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], StudentDto.prototype, "osid", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(16),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "aadhaar", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "refStudentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], StudentDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], StudentDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "socialCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "iscwsn", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "religion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "singleGirl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "weight", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "height", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "bloodGroup", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "homeless", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "bpl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "migrant", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "classId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "studentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "studentName", void 0);
exports.StudentDto = StudentDto;
//# sourceMappingURL=student.dto.js.map