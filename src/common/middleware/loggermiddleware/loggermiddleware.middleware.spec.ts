import { LoggermiddlewareMiddleware } from './loggermiddleware.middleware';

describe('LoggermiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggermiddlewareMiddleware()).toBeDefined();
  });
});
