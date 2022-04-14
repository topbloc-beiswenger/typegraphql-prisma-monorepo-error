"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutOrganizationsInput = class UserUpdateWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationsInput.prototype, "email", void 0);
UserUpdateWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserUpdateWithoutOrganizationsInput);
exports.UserUpdateWithoutOrganizationsInput = UserUpdateWithoutOrganizationsInput;
