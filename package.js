Package.describe({
  name: 'marblear:accounts-twitch',
  version: '0.0.1',
  summary: 'A login service for Twitch',
  git: 'https://github.com/marblear/accounts-twitch',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');

  api.use('typescript', ['client', 'server']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base');
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth');
  api.use('marblear:twitch-oauth');
  api.imply('marblear:twitch-oauth');

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('fetch', ['server']);
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('accounts-twitch.ts', ['client', 'server']);
  api.addFiles('accounts-twitch.client.ts', 'client');
  api.addFiles('accounts-twitch.server.ts', 'server');

  api.export('AccountsTwitch');
});
