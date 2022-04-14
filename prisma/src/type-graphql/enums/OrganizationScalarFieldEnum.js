"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrganizationScalarFieldEnum;
(function (OrganizationScalarFieldEnum) {
    OrganizationScalarFieldEnum["id"] = "id";
    OrganizationScalarFieldEnum["name"] = "name";
})(OrganizationScalarFieldEnum = exports.OrganizationScalarFieldEnum || (exports.OrganizationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrganizationScalarFieldEnum, {
    name: "OrganizationScalarFieldEnum",
    description: undefined,
});
