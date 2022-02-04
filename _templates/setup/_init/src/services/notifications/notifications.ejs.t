---
to: src/services/notifications/notifications.ts
unless_exists: true
---
import messaging, {
  MessagingTypes
} from '@react-native-/messaging';
import { Alert } from 'react-native';
import { notificationsHandler } from './notificationsHandler';

type TNotificationService = {
  init: () => Promise<void>;
  checkPermission: () => Promise<boolean>;
  requestPermission: () => Promise<void>;
};

export const notificationService: TNotificationService = {
  init: async () => {
    const checkResult: boolean = await notificationService.checkPermission();
    messaging().isAutoInitEnabled;
    if (checkResult) {
      const fcmToken: string = await messaging().getToken();
      try {
		// send token to server
        // const res = await httpPost(url, fcmToken)
      } catch (error) {
        console.log(error, 'ERROR RES NOTIF');
      }

      if (!messaging().isDeviceRegisteredForRemoteMessages) {
        await messaging().registerDeviceForRemoteMessages();
      }
      messaging().setAutoInitEnabled(true);
      messaging().onMessage(
        async (remoteMessage: MessagingTypes.RemoteMessage) => {
          console.log('--- FOREGROUND', remoteMessage);
          notificationsHandler(remoteMessage);
        }
      );
      messaging().onNotificationOpenedApp(
        async (remoteMessage: MessagingTypes.RemoteMessage) => {
          console.log('--- BACKGROUND', remoteMessage);
          notificationsHandler(remoteMessage);
        }
      );
      messaging()
        .getInitialNotification()
        .then((remoteMessage: MessagingTypes.RemoteMessage | null) => {
          console.log('--- QUIT', remoteMessage);
          notificationsHandler(remoteMessage);
        });
    } else {
      notificationService.requestPermission();
    }
  },
  checkPermission: async () => {
    const permissionValue: MessagingTypes.AuthorizationStatus =
      await messaging().hasPermission();
    return permissionValue > 0;
  },
  requestPermission: async () => {
    const requestResult: MessagingTypes.AuthorizationStatus =
      await messaging().requestPermission();
    if (requestResult > 0) {
      notificationService.init();
    }
  }
};
