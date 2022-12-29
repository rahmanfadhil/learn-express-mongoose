const responses = {
    200: {
      description: 'success',
    },
    201: {
      description: 'ok',
    },
    400: {
      description: 'Bad request',
    },
    401: {
      description: 'not authenticated',
    },
    403: {
      description: 'Un Authorized',
    },
    404: {
      description: 'Not found',
    },
    409: {
      description: 'Conflicts',
    },
    500: {
      description: 'server Error',
    },
  };
  
  export default responses;