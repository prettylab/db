import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const PATCHSuccessResponse = () => {
  return Response.json(
    { message: message.UPDATE_SUCCESS },
    { status: matchMessageMeta[message.UPDATE_SUCCESS].code },
  );
};
