import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrganizationArgs } from "./args/FindFirstOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class FindFirstOrganizationResolver {
    findFirstOrganization(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrganizationArgs): Promise<Organization | null>;
}
