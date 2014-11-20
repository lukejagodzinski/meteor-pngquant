Package.describe({
  name: 'jagi:pngquant',
  summary: 'Lossy compression of PNG images for Meteor',
  version: '1.0.0',
  git: 'https://github.com/jagi/meteor-pngquant'
});

Npm.depends({
  'pngquant': '0.4.0'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles('lib/pngquant.js', 'server');

  api.export(['PNGQuant'], 'server');
});
