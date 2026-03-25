import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const DELETEErrorResponse = () => {
  return Response.json(
    { message: message.DELETE_ERROR },
    { status: matchMessageMeta[message.DELETE_ERROR].code },
  );
};
