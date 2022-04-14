import { OrganizationCreateNestedManyWithoutUsersInput } from "../inputs/OrganizationCreateNestedManyWithoutUsersInput";
export declare class UserCreateInput {
    name: string;
    organizations?: OrganizationCreateNestedManyWithoutUsersInput | undefined;
    email?: string | undefined;
}
