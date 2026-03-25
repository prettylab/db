import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const PATCHErrorResponse = () => {
  return Response.json(
    { message: message.UPDATE_ERROR },
    { status: matchMessageMeta[message.UPDATE_ERROR].code },
  );
};
