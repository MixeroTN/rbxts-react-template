import { ClientProducer } from "shared/reflex/client-store"
import { ServerProducer } from "shared/reflex/server-store"

export type StoredDataOnClient = {
    clientProducer?: ClientProducer
    serverProducer?: ServerProducer
}

export let clientData: StoredDataOnClient = {}