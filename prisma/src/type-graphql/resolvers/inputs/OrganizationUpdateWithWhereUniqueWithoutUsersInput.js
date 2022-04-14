"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateWithWhereUniqueWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationUpdateWithoutUsersInput_1 = require("../inputs/OrganizationUpdateWithoutUsersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateWithWhereUniqueWithoutUsersInput = class OrganizationUpdateWithWhereUniqueWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpdateWithWhereUniqueWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutUsersInput_1.OrganizationUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationUpdateWithoutUsersInput_1.OrganizationUpdateWithoutUsersInput)
], OrganizationUpdateWithWhereUniqueWithoutUsersInput.prototype, "data", void 0);
OrganizationUpdateWithWhereUniqueWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateWithWhereUniqueWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationUpdateWithWhereUniqueWithoutUsersInput);
exports.OrganizationUpdateWithWhereUniqueWithoutUsersInput = OrganizationUpdateWithWhereUniqueWithoutUsersInput;
