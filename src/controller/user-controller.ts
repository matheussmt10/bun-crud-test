import { UserLogic } from "../logic";
import { UserRequestDto, UserResponseDto } from "../shared/interface";

export class UserController {
  constructor(private userLogic: UserLogic) {}
  public findUsers(): Promise<Array<UserResponseDto>> {
    return this.userLogic.findUsers();
  }

  public createUser(user: UserRequestDto): Promise<void> {
    return this.userLogic.createUser(user);
  }

  public findUserById(id: string): Promise<UserResponseDto | null> {
    return this.userLogic.findUserById(id);
  }
}
