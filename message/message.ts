const message = {
  NOT_FOUND: "not_found",
  INTERNAL_SERVER_ERROR: "internal_server_error",
  TECHNICAL_BREAK: "technical_break",
  OK: "ok",

  CREATE_SUCCESS: "create_success",
  CREATE_ERROR: "create_error",

  UPDATE_SUCCESS: "update_success",
  UPDATE_ERROR: "update_error",

  DELETE_SUCCESS: "delete_success",
  DELETE_ERROR: "delete_error",

  NO_VALID_TYPE: "no_valid_type",

  EMAIL_NOT_SENT: "email_not_sent",
  REGISTRATION_ERROR: "registration_error",

  UNAUTHORIZED: "unauthorized",
  NO_SPACE_IN_AGE_GROUP: "no_space_in_age_group",

  NO_TOKEN_PROVIDED: "no_token_provided",
  SESSION_INVALID: "session_invalid",
  SESSION_EXPIRED: "session_expired",

  INVALID_CREDENTIALS: "invalid_credentials",
  LOGIN_SUCCESS: "login_success",
  LOGOUT_SUCCESS: "logout_success",
};

export const matchMessageMeta = {
  [message.NOT_FOUND]: {
    code: 404,
    success: false,
  },
  [message.INTERNAL_SERVER_ERROR]: {
    code: 500,
    success: false,
  },
  [message.TECHNICAL_BREAK]: {
    code: 503,
    success: false,
  },
  [message.OK]: {
    code: 200,
    success: true,
  },

  [message.CREATE_SUCCESS]: {
    code: 201,
    success: true,
  },
  [message.CREATE_ERROR]: {
    code: 400,
    success: false,
  },

  [message.UPDATE_SUCCESS]: {
    code: 200,
    success: true,
  },
  [message.UPDATE_ERROR]: {
    code: 400,
    success: false,
  },

  [message.DELETE_SUCCESS]: {
    code: 200,
    success: true,
  },
  [message.DELETE_ERROR]: {
    code: 400,
    success: false,
  },

  [message.NO_VALID_TYPE]: {
    code: 400,
    success: false,
  },

  [message.EMAIL_NOT_SENT]: {
    code: 500,
    success: false,
  },
  [message.REGISTRATION_ERROR]: {
    code: 400,
    success: false,
  },

  [message.UNAUTHORIZED]: {
    code: 401,
    success: false,
  },
  [message.NO_SPACE_IN_AGE_GROUP]: {
    code: 409,
    success: false,
  },

  [message.NO_TOKEN_PROVIDED]: {
    code: 401,
    success: false,
  },
  [message.SESSION_INVALID]: {
    code: 401,
    success: false,
  },
  [message.SESSION_EXPIRED]: {
    code: 401,
    success: false,
  },

  [message.INVALID_CREDENTIALS]: {
    code: 401,
    success: false,
  },
  [message.LOGIN_SUCCESS]: {
    code: 200,
    success: true,
  },
  [message.LOGOUT_SUCCESS]: {
    code: 200,
    success: true,
  },
};

export default message;
