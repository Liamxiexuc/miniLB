import nc from "next-connect";
import { allAddresses } from "../../controllers/addressController";

const handler = nc();

handler.post(allAddresses);

export default handler;
