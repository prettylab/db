import message, { matchMessageMeta } from "@prettylab/db/message/message";

export const GETReadSuccessResponse = (data: any) => {
  return Response.json(
    { message: message.OK, data },
    { status: matchMessageMeta[message.OK].code },
  );
};
