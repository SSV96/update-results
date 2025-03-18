export const handler = async (event: any) => {
  console.log("SNS Event:", JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from TypeScript Lambda!"),
  };
};
