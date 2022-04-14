import { GraphQLResolveInfo } from "graphql";
import { UpsertOrganizationArgs } from "./args/UpsertOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class UpsertOrganizationResolver {
    upsertOrganization(ctx: any, info: GraphQLResolveInfo, args: UpsertOrganizationArgs): Promise<Organization>;
}
