import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"




export const NextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: "",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(Credentials) {
                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    method: "POST",
                    body: JSON.stringify(Credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const finalres = await res.json()
                console.log("tooooop", finalres);
                if (finalres.message == "success") {
                    return {
                        name: finalres.user.name,
                        email: finalres.user.email,
                        realTokenFromBackEnd:finalres.token
                    }
                }
                return null
            },

        })
    ],
    callbacks:{
        jwt(params) {

            console.log("params jwt hear",params);
            
            if (params.user){
                params.token.realTokenFromBackEnd=params.user.realTokenFromBackEnd
            }
            return params.token
        },
    },
    pages: {
        signIn: "/SignIn"
    }
}
