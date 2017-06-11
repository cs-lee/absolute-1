// Copyright (c) 2017 The Absolute Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import config from '../../config';
import webpush from 'web-push';

/**
 * Send push with payload to endpoint with it's authentication key.
 * @param {string} endpoint endpoint from subscription
 * @param {string} keys authentication key and p256dh key from subscription
 * @param {string} payload payload data send to endpoint
 * @return {promise} result includes statusCode, headers, body
 */
export function sendPush(endpoint, keys, payload) {
  const SERVER_SUBJECT = 'https://github.com/romandev/absolute';
  return new Promise((resolve, reject) => {
    webpush.setGCMAPIKey(config.serverInfo.pushServerKey);
    webpush.setVapidDetails(
      SERVER_SUBJECT,
      config.serverInfo.pushVapidKeys.publicKey,
      config.serverInfo.pushVapidKeys.privateKey,
    );

    // This is the same output of calling JSON.stringify on a PushSubscription
    const pushSubscription = {
      endpoint: endpoint,
      keys: {
        auth: keys.auth,
        p256dh: keys.p256dh,
      },
    };

    webpush.sendNotification(pushSubscription, payload)
    .then((webPushResult) => {
      return resolve(webPushResult);
    }).catch((webPushError) => {
      return reject(webPushError);
    });
  });
}