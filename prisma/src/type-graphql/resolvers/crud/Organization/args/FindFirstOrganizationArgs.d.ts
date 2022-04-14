import { OrganizationOrderByWithRelationInput } from "../../../inputs/OrganizationOrderByWithRelationInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";
export declare class FindFirstOrganizationArgs {
    where?: OrganizationWhereInput | undefined;
    orderBy?: OrganizationOrderByWithRelationInput[] | undefined;
    cursor?: OrganizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name"> | undefined;
}
