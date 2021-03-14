import { EmailValidator } from "@angular/forms";

export class SignupModel {
    location: string;
    firstName: string;
    lastName: string;
    email: EmailValidator;
    phoneNumber: string;
    username: string;
    password: string;
}
