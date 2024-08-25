import { ClientProducer } from "shared/reflex/client-store";
import { ServerProducer } from "shared/reflex/server-store";

export interface StoredDataOnClient {
	clientProducer?: ClientProducer;
	serverProducer?: ServerProducer;
}

export const clientData: StoredDataOnClient = {};
