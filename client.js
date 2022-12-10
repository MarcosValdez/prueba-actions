import { Client } from 'redis-om'
import { createClient } from 'redis'

const url = 'redis://:dPjPxAM3OputhNRksKjHqiwRqODvHFhl@redis-16024.c299.asia-northeast1-1.gce.cloud.redislabs.com:16024'

/* create a connection to Redis with Node Redis */
export const connection = createClient({ url })
await connection.connect()

/* create a Client and bind it to the Node Redis connection */
const client = await new Client().use(connection)

export default client
