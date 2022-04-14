"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpsertWithWhereUniqueWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateWithoutUsersInput_1 = require("../inputs/OrganizationCreateWithoutUsersInput");
const OrganizationUpdateWithoutUsersInput_1 = require("../inputs/OrganizationUpdateWithoutUsersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpsertWithWhereUniqueWithoutUsersInput = class OrganizationUpsertWithWhereUniqueWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpsertWithWhereUniqueWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutUsersInput_1.OrganizationUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationUpdateWithoutUsersInput_1.OrganizationUpdateWithoutUsersInput)
], OrganizationUpsertWithWhereUniqueWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput)
], OrganizationUpsertWithWhereUniqueWithoutUsersInput.prototype, "create", void 0);
OrganizationUpsertWithWhereUniqueWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpsertWithWhereUniqueWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationUpsertWithWhereUniqueWithoutUsersInput);
exports.OrganizationUpsertWithWhereUniqueWithoutUsersInput = OrganizationUpsertWithWhereUniqueWithoutUsersInput;
