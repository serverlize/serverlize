import middy from '@middy/core';

export namespace Serverlize {
  export namespace Lambda {
    export type Middleware = middy.IMiddyMiddlewareObject;

    // Re-export `*Handler` types from `aws-lambda`
    export type Handler = AWSLambda.Handler;
    export type S3Handler = AWSLambda.S3Handler;
    export type DynamoDBStreamHandler = AWSLambda.DynamoDBStreamHandler;
    export type SNSHandler = AWSLambda.SNSHandler;
    export type CognitoUserPoolTriggerHandler = AWSLambda.CognitoUserPoolTriggerHandler;
    export type CloudFormationCustomResourceHandler = AWSLambda.CloudFormationCustomResourceHandler;
    export type CloudWatchLogsHandler = AWSLambda.CloudWatchLogsHandler;
    export type ScheduledHandler = AWSLambda.ScheduledHandler;
    export type APIGatewayProxyHandler = AWSLambda.APIGatewayProxyHandler;
    export type CodePipelineHandler = AWSLambda.CodePipelineHandler;
    export type CloudFrontRequestHandler = AWSLambda.CloudFrontRequestHandler;
    export type CloudFrontResponseHandler = AWSLambda.CloudFrontResponseHandler;
    export type KinesisStreamHandler = AWSLambda.KinesisStreamHandler;
    export type CustomAuthorizerHandler = AWSLambda.CustomAuthorizerHandler;

    export type EnhancedHandler = middy.IMiddy;
  }
}
