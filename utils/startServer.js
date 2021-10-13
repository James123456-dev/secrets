const server = async (app, port, func) => {
  await app.listen(port, func);
};
module.exports = server;
