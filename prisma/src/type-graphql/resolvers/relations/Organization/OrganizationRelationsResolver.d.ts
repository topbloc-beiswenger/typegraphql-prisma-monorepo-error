import { Organization } from "../../../models/Organization";
import { User } from "../../../models/User";
import { OrganizationUsersArgs } from "./args/OrganizationUsersArgs";
export declare class OrganizationRelationsResolver {
    users(organization: Organization, ctx: any, args: OrganizationUsersArgs): Promise<User[]>;
}
