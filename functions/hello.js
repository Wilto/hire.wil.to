exports.handler = function(event, context, callback) {
  const params = event.queryStringParameters;

  callback(null, {
    statusCode: 200,
    body: `You sent the following: ${JSON.stringify(params)}`
  });
};
