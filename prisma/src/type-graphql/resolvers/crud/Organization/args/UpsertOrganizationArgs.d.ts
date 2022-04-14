import { OrganizationCreateInput } from "../../../inputs/OrganizationCreateInput";
import { OrganizationUpdateInput } from "../../../inputs/OrganizationUpdateInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";
export declare class UpsertOrganizationArgs {
    where: OrganizationWhereUniqueInput;
    create: OrganizationCreateInput;
    update: OrganizationUpdateInput;
}
