"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateManyWithWhereWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationScalarWhereInput_1 = require("../inputs/OrganizationScalarWhereInput");
const OrganizationUpdateManyMutationInput_1 = require("../inputs/OrganizationUpdateManyMutationInput");
let OrganizationUpdateManyWithWhereWithoutUsersInput = class OrganizationUpdateManyWithWhereWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationScalarWhereInput_1.OrganizationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationScalarWhereInput_1.OrganizationScalarWhereInput)
], OrganizationUpdateManyWithWhereWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationUpdateManyMutationInput_1.OrganizationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationUpdateManyMutationInput_1.OrganizationUpdateManyMutationInput)
], OrganizationUpdateManyWithWhereWithoutUsersInput.prototype, "data", void 0);
OrganizationUpdateManyWithWhereWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateManyWithWhereWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationUpdateManyWithWhereWithoutUsersInput);
exports.OrganizationUpdateManyWithWhereWithoutUsersInput = OrganizationUpdateManyWithWhereWithoutUsersInput;
