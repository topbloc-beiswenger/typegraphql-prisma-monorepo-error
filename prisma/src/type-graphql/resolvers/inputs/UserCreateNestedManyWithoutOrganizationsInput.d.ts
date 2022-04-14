import { UserCreateOrConnectWithoutOrganizationsInput } from "../inputs/UserCreateOrConnectWithoutOrganizationsInput";
import { UserCreateWithoutOrganizationsInput } from "../inputs/UserCreateWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutOrganizationsInput {
    create?: UserCreateWithoutOrganizationsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
