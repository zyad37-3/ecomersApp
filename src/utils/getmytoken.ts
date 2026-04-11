import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";





export default async function getmytoken() {
 const mycookies= await cookies()
 const tokenfromcookies=
    mycookies.get("next-auth.session-token")?.value ||
    mycookies.get("__Secure-next-auth.session-token")?.value;
console.log("my token",tokenfromcookies);

const mytokenafterDecoded=await decode({token:tokenfromcookies,secret:process.env.NEXTAUTH_SECRET!})
if (mytokenafterDecoded==null){
    return null
}
console.log("my mytokenafterDecoded",mytokenafterDecoded.realTokenFromBackEnd);

return mytokenafterDecoded.realTokenFromBackEnd 
}
