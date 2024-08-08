"use server"

import { sql } from "@vercel/postgres";

export const createUser = async (username: string, metaAddress:string, age: number) => {
    try {
        console.log("Creating user ...")
        
        const data = await sql`
            INSERT INTO Pranclezer (username, metaAddress, age)
            VALUES
            (${username}, ${metaAddress}, ${age}),
        `


        console.log(data)

    } catch (error) {
        console.log("error", error)
    }
}