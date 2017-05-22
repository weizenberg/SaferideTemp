
var log4js = require('log4js');

var sendCommand = false;

export const create = ({ body }, res, next) => {
  var log = log4js.getLogger('info');
  log.info(body);

  require('log4js-elasticsearch').flushAll(true);

  res.status(201).json(sendCommand)
  sendCommand = false;
};

export const createCommand = ({ body, params }, res, next) => {
  sendCommand = true;
  res.status(200).json(sendCommand);
};
