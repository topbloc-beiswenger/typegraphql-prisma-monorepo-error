"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrganizationUpdateWithoutUsersInput = class OrganizationUpdateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateWithoutUsersInput.prototype, "name", void 0);
OrganizationUpdateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationUpdateWithoutUsersInput);
exports.OrganizationUpdateWithoutUsersInput = OrganizationUpdateWithoutUsersInput;
