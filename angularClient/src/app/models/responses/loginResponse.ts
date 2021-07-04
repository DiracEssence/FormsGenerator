
import { User } from "../User";

export class LoginResponse {
    public User : User = new User();
    public Token : string = "";
}