export class User{
    _id?: number;
    userId: string;
    username: string;
    password: string;
    role: string;
    email: string;
    storeId: string;
    constructor(
        userId: string,
        username: string,
        password: string,
        role: string,
        email: string,
        storeId: string,
    ){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.storeId = storeId
    }
}