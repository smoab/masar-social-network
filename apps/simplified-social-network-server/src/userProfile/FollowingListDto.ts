import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class FollowingListDto {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    followingId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    followingName!: string;
}

export { FollowingListDto as FollowingListDto };