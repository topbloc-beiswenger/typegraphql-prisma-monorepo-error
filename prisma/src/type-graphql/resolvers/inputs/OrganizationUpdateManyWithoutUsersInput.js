"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateManyWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrganizationCreateOrConnectWithoutUsersInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutUsersInput");
const OrganizationCreateWithoutUsersInput_1 = require("../inputs/OrganizationCreateWithoutUsersInput");
const OrganizationScalarWhereInput_1 = require("../inputs/OrganizationScalarWhereInput");
const OrganizationUpdateManyWithWhereWithoutUsersInput_1 = require("../inputs/OrganizationUpdateManyWithWhereWithoutUsersInput");
const OrganizationUpdateWithWhereUniqueWithoutUsersInput_1 = require("../inputs/OrganizationUpdateWithWhereUniqueWithoutUsersInput");
const OrganizationUpsertWithWhereUniqueWithoutUsersInput_1 = require("../inputs/OrganizationUpsertWithWhereUniqueWithoutUsersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateManyWithoutUsersInput = class OrganizationUpdateManyWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationCreateWithoutUsersInput_1.OrganizationCreateWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutUsersInput_1.OrganizationCreateOrConnectWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationUpsertWithWhereUniqueWithoutUsersInput_1.OrganizationUpsertWithWhereUniqueWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationUpdateWithWhereUniqueWithoutUsersInput_1.OrganizationUpdateWithWhereUniqueWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationUpdateManyWithWhereWithoutUsersInput_1.OrganizationUpdateManyWithWhereWithoutUsersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrganizationScalarWhereInput_1.OrganizationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrganizationUpdateManyWithoutUsersInput.prototype, "deleteMany", void 0);
OrganizationUpdateManyWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrganizationUpdateManyWithoutUsersInput", {
        isAbstract: true
    })
], OrganizationUpdateManyWithoutUsersInput);
exports.OrganizationUpdateManyWithoutUsersInput = OrganizationUpdateManyWithoutUsersInput;
