import { GraphQLResolveInfo } from "graphql";
import { UpdateOrganizationArgs } from "./args/UpdateOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class UpdateOrganizationResolver {
    updateOrganization(ctx: any, info: GraphQLResolveInfo, args: UpdateOrganizationArgs): Promise<Organization | null>;
}
