import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class FollowerListDto {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    followerId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    followerName!: string;
}

export { FollowerListDto as FollowerListDto };