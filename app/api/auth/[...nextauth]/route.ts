import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
            async authorize(credentials :Record<"username"|"password",string>| undefined){
                if(!credentials || !credentials?.username || !credentials?.password){
                    throw new Error("Missing username and password")
                }
            const user ={id:'1',name:'John Doe',email:"johndoe@example.com"};
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
    }
};

const handler =NextAuth(authOptions)
export {handler as GET ,handler as POST}