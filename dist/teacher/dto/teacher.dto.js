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
exports.TeacherDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class TeacherDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.teacherId = `${this.osid}`;
        this.refTeacherId = `${this.refTeacherId}` == null || undefined || 'undefined' ? "" : `${this.refTeacherId}`;
        this.firstName = `${this.firstName}` == null || undefined || 'undefined' ? "" : `${this.firstName}`;
        this.lastName = `${this.lastName}` == null || undefined || 'undefined' ? "" : `${this.lastName}`;
        this.contactNumber = `${this.contactNumber}` == null || undefined || 'undefined' ? "" : `${this.contactNumber}`;
        this.email = `${this.email}` == null || undefined || 'undefined' ? "" : `${this.email}`;
        this.gender = `${this.gender}` == null || undefined || 'undefined' ? "" : `${this.gender}`;
        this.socialCategory = `${this.socialCategory}` == null || undefined || 'undefined' ? "" : `${this.socialCategory}`;
        this.birthDate = `${this.birthDate}` == null || undefined || 'undefined' ? "" : `${this.birthDate}`;
        this.designation = `${this.designation}` == null || undefined || 'undefined' ? "" : `${this.designation}`;
        this.cadre = `${this.cadre}` == null || undefined || 'undefined' ? "" : `${this.cadre}`;
        this.profQualification = `${this.profQualification}` == null || undefined || 'undefined' ? "" : `${this.profQualification}`;
        this.joiningDate = `${this.joiningDate}` == null || undefined || 'undefined' ? "" : `${this.joiningDate}`;
        this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}`;
        this.bloodGroup = `${this.bloodGroup}` == null || undefined || 'undefined' ? "" : `${this.bloodGroup}`;
        this.maritalStatus = `${this.maritalStatus}` == null || undefined || 'undefined' ? "" : `${this.maritalStatus}`;
        this.blockId = `${this.blockId}` == null || undefined || 'undefined' ? "" : `${this.blockId}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.address = `${this.address}` == null || undefined || 'undefined' ? "" : `${this.address}`;
        this.compSkills = `${this.compSkills}` == null || undefined || 'undefined' ? "" : `${this.compSkills}`;
        this.religion = `${this.religion}` == null || undefined || 'undefined' ? "" : `${this.religion}`;
        this.homeDistance = `${this.homeDistance}` == null || undefined || 'undefined' ? "" : `${this.homeDistance}`;
        this.roles = `${this.roles}` == null || undefined || 'undefined' ? "" : `${this.roles}`;
        this.disability = `${this.disability}` == null || undefined || 'undefined' ? "" : `${this.disability}`;
        this.acrId = `${this.acrId}` == null || undefined || 'undefined' ? "" : `${this.acrId}`;
        this.retirementDate = `${this.retirementDate}` == null || undefined || 'undefined' ? "" : `${this.retirementDate}`;
        this.workingStatus = `${this.workingStatus}` == null || undefined || 'undefined' ? "" : `${this.workingStatus}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "refTeacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "socialCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "designation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "cadre", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "profQualification", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "joiningDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "bloodGroup", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "blockId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "compSkills", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "disability", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "religion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "homeDistance", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "roles", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "acrId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "retirementDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TeacherDto.prototype, "workingStatus", void 0);
exports.TeacherDto = TeacherDto;
//# sourceMappingURL=teacher.dto.js.map