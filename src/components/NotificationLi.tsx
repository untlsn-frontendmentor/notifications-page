import type { Notification } from '~/db/notifications';
import dayjs from 'dayjs';
import type { RelativeTimeFormatUnit } from '~/types/common';


const formater = new Intl.RelativeTimeFormat();
const getIntlFormat = (isoDate: string) => {
  const now = Date.now();
  const diffDate = dayjs(isoDate);
  const tryParseBy = (unit: RelativeTimeFormatUnit) => {
    const diff = diffDate.diff(now, unit);
    if (diff) return formater.format(diff, unit);
    return;
  };

  return tryParseBy('year')
    || tryParseBy('month')
    || tryParseBy('week')
    || tryParseBy('day')
    || tryParseBy('hour')
    || tryParseBy('minute');
};

export default function NotificationLi(props: Notification) {
  return (
    <li
      class="flex p-4 gap-4 rounded-xl"
      classList={{
        'bg-c-grayish': props.new,
      }}
    >
      <img src={props.avatar} alt={`${props.name} avatar`} class="h-12" />
      <div class="space-y-2">
        <p class="space-x-2">
          <a href={props.nameUrl} class="font-bold hocus:text-c-blue">{props.name}</a>
          <span class="text-gray-400">{props.description}</span>
          {props.link && <a class="font-bold text-gray-700 hocus:text-c-blue" href={props.linkUrl}>{props.link}</a>}
          {props.new && <i class="i-carbon-dot-mark text-red-500">new</i>}
        </p>
        <p class="text-gray-400">
          {getIntlFormat(props.date)}
        </p>
        {props.message && (
          <p class="border-1 p-4 text-gray-400 rounded cursor-pointer hocus:bg-c-grayish">{props.message}</p>
        )}
      </div>
      {props.photo && <img src={props.photo} alt="commented" class="h-12 ml-auto cursor-pointer hocus:shadow" />}
    </li>
  );
}
