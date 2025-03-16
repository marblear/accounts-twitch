import { TwitchOAuth } from 'meteor/marblear:twitch-oauth';
import { Accounts } from './types';

const loginWithTwitch = async (options, callback) => {
  // support a callback without options
  if (!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  const credentialRequestCompleteHandler = Accounts.oauth.credentialRequestCompleteHandler(callback);
  await TwitchOAuth.requestCredential(options, credentialRequestCompleteHandler);
};

Accounts.registerClientLoginFunction('twitch', loginWithTwitch);

// @ts-expect-error Add global function to Meteor
Meteor.loginWithTwitch = (...args: unknown[]) => Accounts.applyLoginFunction('twitch', args);
