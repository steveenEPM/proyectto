
import { db } from "../utils/firebases";
import { collection} from "@firebase/firestore";

export const collectionRef = collection(db, "odisyBook2");
