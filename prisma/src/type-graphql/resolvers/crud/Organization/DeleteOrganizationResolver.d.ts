import { GraphQLResolveInfo } from "graphql";
import { DeleteOrganizationArgs } from "./args/DeleteOrganizationArgs";
import { Organization } from "../../../models/Organization";
export declare class DeleteOrganizationResolver {
    deleteOrganization(ctx: any, info: GraphQLResolveInfo, args: DeleteOrganizationArgs): Promise<Organization | null>;
}
