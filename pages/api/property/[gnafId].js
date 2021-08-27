import nc from "next-connect";
import { getProperty } from "../../../controllers/propertyController";

const handler = nc();

handler.post(getProperty);

export default handler;
