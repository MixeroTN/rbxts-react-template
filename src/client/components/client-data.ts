import type { ClientProducer } from "shared/reflex/client-store";
import type { ServerProducer } from "shared/reflex/server-store";

export interface StoredDataOnClient {
	clientProducer?: ClientProducer;
	serverProducer?: ServerProducer;
}

export const clientData: StoredDataOnClient = {};
