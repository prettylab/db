import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const GETListErrorResponse = () => {
  return Response.json(
    { message: message.INTERNAL_SERVER_ERROR },
    { status: matchMessageMeta[message.INTERNAL_SERVER_ERROR].code },
  );
};
