const {
  url,
  repository: { url: repo }
} = require('../package.json');

module.exports = {
  title: 'Everything has gone horribly wrong - blog',
  url,
  repo,
  language: 'en',
  description: 'Blog site.',
  author: {
    name: 'Mark Hopcraft',
    email: 'mark82hopcraft.com'
  }
};
