import { Module } from "@nestjs/common";
import { UserProfileService } from "./userprofile.service";
import { UserProfileController } from "./userprofile.controller";

@Module({
  controllers: [UserProfileController],
  providers: [UserProfileService],
  exports: [UserProfileService],
})
export class UserProfileModule {}
