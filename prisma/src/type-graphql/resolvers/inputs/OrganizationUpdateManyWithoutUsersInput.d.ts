import { OrganizationCreateOrConnectWithoutUsersInput } from "../inputs/OrganizationCreateOrConnectWithoutUsersInput";
import { OrganizationCreateWithoutUsersInput } from "../inputs/OrganizationCreateWithoutUsersInput";
import { OrganizationScalarWhereInput } from "../inputs/OrganizationScalarWhereInput";
import { OrganizationUpdateManyWithWhereWithoutUsersInput } from "../inputs/OrganizationUpdateManyWithWhereWithoutUsersInput";
import { OrganizationUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/OrganizationUpdateWithWhereUniqueWithoutUsersInput";
import { OrganizationUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/OrganizationUpsertWithWhereUniqueWithoutUsersInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationUpdateManyWithoutUsersInput {
    create?: OrganizationCreateWithoutUsersInput[] | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput[] | undefined;
    upsert?: OrganizationUpsertWithWhereUniqueWithoutUsersInput[] | undefined;
    set?: OrganizationWhereUniqueInput[] | undefined;
    disconnect?: OrganizationWhereUniqueInput[] | undefined;
    delete?: OrganizationWhereUniqueInput[] | undefined;
    connect?: OrganizationWhereUniqueInput[] | undefined;
    update?: OrganizationUpdateWithWhereUniqueWithoutUsersInput[] | undefined;
    updateMany?: OrganizationUpdateManyWithWhereWithoutUsersInput[] | undefined;
    deleteMany?: OrganizationScalarWhereInput[] | undefined;
}
