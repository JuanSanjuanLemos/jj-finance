import { query as q } from "faunadb";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { client } from "../../services/fauna";


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks:{
    async signIn({user, account,profile}){
      const {email} = user;
     try{
      const resp = await client.query(
       q.If(
         q.Not(
           q.Exists(
             q.Match(
               q.Index('user_by_email'),
               q.Casefold(user.email!)
             )
           )
         ),
         q.Create(
          q.Collection('users'),
          {data:{email,transactions:[]}}
        ),
        q.Get(
          q.Match(
            q.Index('user_by_email'),
            q.Casefold(user.email!)
          )
        )
       )
      );
      
      return true

     }catch{
       return false
     }
    },
    async redirect({url,baseUrl}){
      return baseUrl
    }
  }
})