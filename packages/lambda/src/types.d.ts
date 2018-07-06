import middy from '@middy/core';
import { Handler as BaseHandler } from 'aws-lambda';

export type LambdaMiddleware = middy.IMiddyMiddlewareObject;
export type Handler = BaseHandler;
export type EnhancedHandler = middy.IMiddy;
