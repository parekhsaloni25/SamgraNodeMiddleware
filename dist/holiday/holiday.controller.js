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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayController = void 0;
const common_1 = require("@nestjs/common");
const holiday_search_dto_1 = require("./dto/holiday-search.dto ");
const holiday_dto_1 = require("./dto/holiday.dto");
const holiday_service_1 = require("./holiday.service");
let HolidayController = class HolidayController {
    constructor(holidayService) {
        this.holidayService = holidayService;
    }
    async getHolidayById(holidayId) {
        return this.holidayService.findById(holidayId);
    }
    async findAll() {
        return this.holidayService.findAll();
    }
    async createHoliday(holidayDto) {
        return this.holidayService.createHoliday(holidayDto);
    }
    async updateHoliday(holidayId, holidayDto) {
        return this.holidayService.updateHoliday(holidayId, holidayDto);
    }
    async searchHoliday(holidaySearchDto) {
        return this.holidayService.searchHoliday(holidaySearchDto);
    }
    async findHolidayByYear(year) {
        return this.holidayService.findHolidayByYear(year);
    }
    async findHolidayByContext(context) {
        return this.holidayService.findHolidayByContext(context);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)("/:id"),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "getHolidayById", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "createHoliday", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "updateHoliday", null);
__decorate([
    (0, common_1.Post)("/search"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [holiday_search_dto_1.HolidaySearchDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "searchHoliday", null);
__decorate([
    (0, common_1.Get)("/findByYear/:year"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findHolidayByYear", null);
__decorate([
    (0, common_1.Get)("/findByContext/:context"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)('context')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findHolidayByContext", null);
HolidayController = __decorate([
    (0, common_1.Controller)("holiday"),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService])
], HolidayController);
exports.HolidayController = HolidayController;
//# sourceMappingURL=holiday.controller.js.map