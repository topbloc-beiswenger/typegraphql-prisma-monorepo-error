import { OrganizationCreateOrConnectWithoutUsersInput } from "../inputs/OrganizationCreateOrConnectWithoutUsersInput";
import { OrganizationCreateWithoutUsersInput } from "../inputs/OrganizationCreateWithoutUsersInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationCreateNestedManyWithoutUsersInput {
    create?: OrganizationCreateWithoutUsersInput[] | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput[] | undefined;
    connect?: OrganizationWhereUniqueInput[] | undefined;
}
