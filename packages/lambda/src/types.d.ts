import middy from '@middy/core';

declare namespace Serverlize {
  namespace Lambda {
    // Re-export Middleware types from `@middy/core`
    export type Middleware = middy.IMiddyMiddlewareObject;
    export type MiddlewareFunction = middy.IMiddyMiddlewareFunction;
    export type MiddlewareHandlerWrapper = middy.IHandlerLambda;
    export type MiddlewareNextFunction = middy.IMiddyNextFunction;

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

    // Re-export `Handler` type from `middy`
    export type EnhancedHandler = middy.IMiddy;
  }
}
