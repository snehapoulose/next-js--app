import { DefaultSession,DefaultUser } from "next-auth";


declare module "next-auth"{
    interface User extends DefaultUser{
        role?:"admin"|"user";
    }
    interface Session{
        user:User & DefaultSession["user"];
    }
}