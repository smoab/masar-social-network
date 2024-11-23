import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserProfileService } from "./userprofile.service";
import { FollowerListDto } from "../userProfile/FollowerListDto";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileController {
  constructor(protected readonly service: UserProfileService) {}

  @common.Get("/followers/:userId")
  @swagger.ApiOkResponse({
    type: FollowerListDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFollowers(
    @common.Body()
    body: FollowerListDto
  ): Promise<FollowerListDto[]> {
        return this.service.GetFollowers(body);
      }

  @common.Get("/following/:userId")
  @swagger.ApiOkResponse({
    type: FollowerListDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFollowing(
    @common.Body()
    body: FollowerListDto
  ): Promise<FollowerListDto[]> {
        return this.service.GetFollowing(body);
      }
}
