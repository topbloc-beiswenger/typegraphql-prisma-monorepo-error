import { GraphQLResolveInfo } from "graphql";
import { FindManyOrganizationArgs } from "./args/FindManyOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class FindManyOrganizationResolver {
    organizations(ctx: any, info: GraphQLResolveInfo, args: FindManyOrganizationArgs): Promise<Organization[]>;
}
