export default [
  {
    url: '/api/demo',
    method: 'get',
    statusCode: 403,
    response: () => {
      return {
        data: {
          'list|0-10': [
            {
              key: '@id',
              name: '@cname',
              age: '@integer(18, 60)'
            }
          ],
          total: '@integer(0, 100)'
        },
        success: true
      };
    }
  }
];
