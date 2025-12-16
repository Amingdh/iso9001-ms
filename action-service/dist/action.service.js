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
exports.ActionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const action_schema_1 = require("./action.schema");
let ActionService = class ActionService {
    constructor(actionModel) {
        this.actionModel = actionModel;
    }
    findAll() {
        return this.actionModel.find().exec();
    }
    async findOne(id) {
        const action = await this.actionModel.findById(id).exec();
        if (!action) {
            throw new common_1.NotFoundException('Action not found');
        }
        return action;
    }
    create(payload) {
        return this.actionModel.create(payload);
    }
    async update(id, payload) {
        const updated = await this.actionModel.findByIdAndUpdate(id, payload, { new: true }).exec();
        if (!updated) {
            throw new common_1.NotFoundException('Action not found');
        }
        return updated;
    }
    async remove(id) {
        const res = await this.actionModel.findByIdAndDelete(id).exec();
        if (!res) {
            throw new common_1.NotFoundException('Action not found');
        }
    }
};
exports.ActionService = ActionService;
exports.ActionService = ActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(action_schema_1.Action.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActionService);
//# sourceMappingURL=action.service.js.map