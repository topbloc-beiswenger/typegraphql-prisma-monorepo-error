import { UserCreateOrConnectWithoutOrganizationsInput } from "../inputs/UserCreateOrConnectWithoutOrganizationsInput";
import { UserCreateWithoutOrganizationsInput } from "../inputs/UserCreateWithoutOrganizationsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutOrganizationsInput } from "../inputs/UserUpdateManyWithWhereWithoutOrganizationsInput";
import { UserUpdateWithWhereUniqueWithoutOrganizationsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutOrganizationsInput";
import { UserUpsertWithWhereUniqueWithoutOrganizationsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutOrganizationsInput {
    create?: UserCreateWithoutOrganizationsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationsInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutOrganizationsInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationsInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
