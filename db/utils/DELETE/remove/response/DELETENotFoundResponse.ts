import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const DELETENotFoundResponse = () => {
  return Response.json(
    { message: message.NOT_FOUND },
    { status: matchMessageMeta[message.NOT_FOUND].code },
  );
};
