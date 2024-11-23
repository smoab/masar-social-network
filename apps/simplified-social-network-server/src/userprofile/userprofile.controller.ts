import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserProfileService } from "./userprofile.service";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileController {
  constructor(protected readonly service: UserProfileService) {}
}
