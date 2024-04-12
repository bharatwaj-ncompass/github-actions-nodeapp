exports.handler = async (event) => {
    console.log("This is a test lambda");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Lambda return something.. updated the lambda post fortst success'),
      };
    return response;
}