import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrganizationArgs } from "./args/FindUniqueOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class FindUniqueOrganizationResolver {
    organization(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrganizationArgs): Promise<Organization | null>;
}
