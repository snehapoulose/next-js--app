import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import { Session } from "inspector/promises";

export const authOptions:NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID!,
             clientSecret:process.env.GITHUB_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"UserName",type:"text"},
                password:{label:"Password",type:"password"},
            },
            async authorize(credentials) :Promise<{id:string;name:string;email:string; role:"admin"|"user"}| null>{
                if(!credentials?.username || !credentials?.password){
                    throw new Error("Missing username and password")
                }
            const user ={id:'1',name:'John Doe',email:"johndoe@example.com" ,role:"admin" as const};
            if(credentials.username==="john" && credentials.password=== "password"){
                return user
            }
            throw new Error("Invalid")
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt"
    },
    // secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}:{token:JWT;user?:{role?:"admin"|"user"}}){
            if(user){
                token.role = user.role||"user"
            }
            return token;
        },
        async session({session,token}:{session:Session,token:JWT}){
            if(session.user){
                session.user.role=token.role as "admin"|"user";
            }
            return session
        }
    }
};

const handler =NextAuth(authOptions)
export {handler as GET ,handler as POST}