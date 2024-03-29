"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const attendance_module_1 = require("./Attendance/attendance.module");
const configuration_module_1 = require("./configs/configuration.module");
const holiday_module_1 = require("./holiday/holiday.module");
const student_module_1 = require("./student/student.module");
const teacher_module_1 = require("./teacher/teacher.module");
const timetable_module_1 = require("./Timetable/timetable.module");
const config_service_1 = require("./configs/config.service");
const school_module_1 = require("./school/school.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.dbConfigService.getTypeOrmConfig()),
            config_1.ConfigModule.forRoot(),
            student_module_1.StudentModule, holiday_module_1.HolidayModule, configuration_module_1.ConfigurationModule, attendance_module_1.AttendanceModule, timetable_module_1.TimetableModule, teacher_module_1.TeacherModule, school_module_1.SchoolModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map