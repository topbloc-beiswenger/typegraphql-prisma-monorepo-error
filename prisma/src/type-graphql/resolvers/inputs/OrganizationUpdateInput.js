"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutOrganizationsInput_1 = require("../inputs/UserUpdateManyWithoutOrganizationsInput");
let OrganizationUpdateInput = class OrganizationUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutOrganizationsInput_1.UserUpdateManyWithoutOrganizationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutOrganizationsInput_1.UserUpdateManyWithoutOrganizationsInput)
], OrganizationUpdateInput.prototype, "users", void 0);
OrganizationUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateInput", {
        isAbstract: true
    })
], OrganizationUpdateInput);
exports.OrganizationUpdateInput = OrganizationUpdateInput;
