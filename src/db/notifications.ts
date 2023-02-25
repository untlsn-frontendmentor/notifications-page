import dayjs from 'dayjs';

export type Notification = {
  name:        string,
  nameUrl:     string
  avatar:      string,
  description: string,
  date:        string,
  link?:       string,
  linkUrl?:    string
  message?:    string,
  photo?:      string,
  new?:        boolean
}

let notifications: Notification[] = [{
  name:        'Mark Webber',
  nameUrl:     '#',
  avatar:      '/images/avatar-mark-webber.webp',
  description: 'reacted to your recent post',
  date:        dayjs().subtract(1, 'm').toISOString(),
  link:        'My first tournament today!',
  linkUrl:     '#',
  new:         true,
}, {
  name:        'Angela Gray',
  nameUrl:     '#',
  avatar:      '/images/avatar-angela-gray.webp',
  description: 'followed you',
  date:        dayjs().subtract(5, 'm').toISOString(),
  new:         true,
}, {
  name:        'Jacob Thompson',
  nameUrl:     '#',
  avatar:      '/images/avatar-jacob-thompson.webp',
  description: 'has joined your group',
  date:        dayjs().subtract(1, 'd').toISOString(),
  link:        'Chess Club',
  linkUrl:     '#',
  new:         true,
}, {
  name:        'Rizky Hasanuddin',
  nameUrl:     '#',
  avatar:      '/images/avatar-rizky-hasanuddin.webp',
  description: 'sent you a private message',
  date:        dayjs().subtract(5, 'd').toISOString(),
  message:     'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
}, {
  name:        'Kimberly Smith',
  nameUrl:     '#',
  avatar:      '/images/avatar-kimberly-smith.webp',
  description: 'commented on your picture',
  date:        dayjs().subtract(1, 'w').toISOString(),
  photo:       '/images/image-chess.webp',
}, {
  name:        'Nathan Peterson',
  nameUrl:     '#',
  avatar:      '/images/avatar-nathan-peterson.webp',
  description: 'reacted to your recent post',
  date:        dayjs().subtract(2, 'w').toISOString(),
  link:        '5 end-game strategies to increase your win rate',
  linkUrl:     '#',
}, {
  name:        'Anna Kim',
  nameUrl:     '#',
  avatar:      '/images/avatar-anna-kim.webp',
  description: 'left the group',
  date:        dayjs().subtract(2, 'w').toISOString(),
  link:        'Chess Club',
  linkUrl:     '#',
}];

export const getNotifications = async () => notifications;

export const setNotificationsAsSee = async () => {
  notifications = notifications.map((v) => ({
    ...v,
    new: false,
  }));
};
