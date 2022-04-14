"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrganizationUpdateManyMutationInput = class OrganizationUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateManyMutationInput.prototype, "name", void 0);
OrganizationUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateManyMutationInput", {
        isAbstract: true
    })
], OrganizationUpdateManyMutationInput);
exports.OrganizationUpdateManyMutationInput = OrganizationUpdateManyMutationInput;
