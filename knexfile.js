// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds'
   },
  production: {
    client:'pg',
    connection:'postgres://ejkhhmvjfbanbr:c4b7fc6bde563f229e6e19ec4d69f6c3b55780eae650b9ef501e72698e58b5ec@ec2-54-225-242-74.compute-1.amazonaws.com:5432/d3r190c56c39aj'
  },

};
