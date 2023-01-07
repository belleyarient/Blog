import { createClient} from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "13y9srwv58",
    apiKey: process.env.API_KEY || '',
})