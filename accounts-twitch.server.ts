import { TwitchOAuth } from 'meteor/marblear:twitch-oauth';
import { Accounts } from './types';

Accounts.addAutopublishFields({
  forLoggedInUser: TwitchOAuth.whitelistedFields
    .concat(['accessToken', 'expiresAt'])
    .map(
      (subfield: string) => `services.apple.${subfield}` // don't publish refresh token
    ),

  // even with autopublish, no legitimate web app should be
  // publishing all users' emails
  forOtherUsers: TwitchOAuth.whitelistedFields
    .filter((field: string) => field !== 'email' && field !== 'verified_email')
    .map((subfield: string) => `services.apple.${subfield}`)
});
