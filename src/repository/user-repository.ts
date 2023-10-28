import { UserRequestDto, UserResponseDto } from "../shared/interface";
import { User } from "./model";

export class UserRepository {
  public async findAll(): Promise<Array<UserResponseDto>> {
    return User.find();
  }

  public async findById(id: string): Promise<UserResponseDto | null> {
    return User.findById(id);
  }

  public async create(user: UserRequestDto): Promise<void> {
    await User.create(user);
  }
}
