
import { Client,Account, Storage, Databases } from "appwrite";

import { env } from "@/env";

const client = new Client()
    .setEndpoint(env.appwrite.endpointUrl)
    .setProject(env.appwrite.projectId)



export const account = new Account(client)
export const database = new Databases(client)
export const storage = new Storage(client)
  
