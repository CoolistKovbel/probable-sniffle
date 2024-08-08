"use server"

import { sql } from "@vercel/postgres";

export const createAdminDash = async () => {
    try {
        console.log("Creating admin user")
        

        const data = await sql`
            CREATE TABLE Pranclezer (
                username VARCHAR(255),
                metaAddress VARCHAR(255),
                age INT
            );
        `


        console.log(data)

    } catch (error) {
        console.log("error")
    }
}