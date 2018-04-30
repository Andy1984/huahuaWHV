const AV = require('../libs/av-weapp-min.js')
class user extends AV.Object {
  get content() {return this.get('content')}
  set content(value) {return this.set('content',value)}
  get done() {return this.get('done')}
  set done(value) {return this.set('done',value)}
}

AV.Object.register(user);
module.exports = user;