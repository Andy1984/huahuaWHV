const AV = require('../utils/av-weapp-min');
class http_request extends AV.Object {
  get content() {return this.get('content')}
  set content(value) {return this.set('content',value)}
  get done() {return this.get('done')}
  set done(value) {return this.set('done',value)}
}

AV.Object.register(http_request);
module.exports = http_request;