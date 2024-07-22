import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

// Lambda code goes here
export const gigsListHandler = async (
    event: APIGatewayEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    console.log("gigsListHandler invoked");
   const gigLocation = event.gigLocation || "NOT_SET";
   const gigId = event.gigId || "NOT_SET";
   console.log(`PARAMS: gigId = ${gigId}`);
   console.log(`PARAMS: gigLocation = ${gigLocation}`);
    return {
        //status: "ok",
        //list: ["Rolling Stones", "The Doors", "The Beatles"],
        statusCode: 200,
        body: JSON.stringify({
            list: ["Rolling Stones", "The Doors", "The Beatles"]
        })
    };
};


