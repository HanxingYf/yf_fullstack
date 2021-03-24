import mockjs from 'mockjs'

export default {
  'GET /api/tags': mockjs.mock({
    'list|100': [{
      name: '@city',
      'value|1-100':50,
      'type|0-2':1
    }]
  }),
  '/api/users/1': { id: 1 },
  'POST /api/users/create': (req, res) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.end('ok');
  }
}