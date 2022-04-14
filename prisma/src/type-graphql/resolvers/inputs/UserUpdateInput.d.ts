import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganizationUpdateManyWithoutUsersInput } from "../inputs/OrganizationUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    organizations?: OrganizationUpdateManyWithoutUsersInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
}
