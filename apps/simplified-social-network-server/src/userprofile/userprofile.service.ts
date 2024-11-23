import { Injectable } from "@nestjs/common";
import { FollowerListDto } from "../userProfile/FollowerListDto";

@Injectable()
export class UserProfileService {
  constructor() {}
  async GetFollowers(args: FollowerListDto): Promise<FollowerListDto[]> {
    throw new Error("Not implemented");
  }
  async GetFollowing(args: FollowerListDto): Promise<FollowerListDto[]> {
    throw new Error("Not implemented");
  }
}
