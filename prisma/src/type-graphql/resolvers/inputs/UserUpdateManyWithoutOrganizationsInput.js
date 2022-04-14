"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutOrganizationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrganizationsInput_1 = require("../inputs/UserCreateOrConnectWithoutOrganizationsInput");
const UserCreateWithoutOrganizationsInput_1 = require("../inputs/UserCreateWithoutOrganizationsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutOrganizationsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutOrganizationsInput");
const UserUpdateWithWhereUniqueWithoutOrganizationsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutOrganizationsInput");
const UserUpsertWithWhereUniqueWithoutOrganizationsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutOrganizationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutOrganizationsInput = class UserUpdateManyWithoutOrganizationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutOrganizationsInput_1.UserCreateWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutOrganizationsInput_1.UserCreateOrConnectWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutOrganizationsInput_1.UserUpsertWithWhereUniqueWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutOrganizationsInput_1.UserUpdateWithWhereUniqueWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutOrganizationsInput_1.UserUpdateManyWithWhereWithoutOrganizationsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutOrganizationsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutOrganizationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutOrganizationsInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutOrganizationsInput);
exports.UserUpdateManyWithoutOrganizationsInput = UserUpdateManyWithoutOrganizationsInput;
