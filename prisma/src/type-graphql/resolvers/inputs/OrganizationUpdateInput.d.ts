import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutOrganizationsInput } from "../inputs/UserUpdateManyWithoutOrganizationsInput";
export declare class OrganizationUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    users?: UserUpdateManyWithoutOrganizationsInput | undefined;
}
