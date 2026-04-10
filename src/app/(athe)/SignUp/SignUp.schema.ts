    import * as z from "zod"
    export const schema = z.object({
        name: z.string("Enter Your name").nonempty("Enter Your name"),
        email: z.email("Enter Your Email").nonempty("Enter Your name"),
        password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        rePassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        phone:z.string("Enter Your Phone")

    }).refine((param)=>param.password===param.rePassword,{error:"rePassword not mathed password",path:["rePassword"]})
