import { UserCreateNestedManyWithoutOrganizationsInput } from "../inputs/UserCreateNestedManyWithoutOrganizationsInput";
export declare class OrganizationCreateInput {
    name: string;
    users?: UserCreateNestedManyWithoutOrganizationsInput | undefined;
}
