import { getNotifications, setNotificationsAsSee } from '~/db/notifications';
import NotificationLi from '~/components/NotificationLi';

export default function Home() {
  const notifications = createRouteData(getNotifications, {
    key: ['notifications'],
  });
  const [, setAsSeeAction] = createRouteAction(setNotificationsAsSee, {
    invalidate: ['notifications'],
  });
  const newCount = createMemo(() => (
    notifications()?.reduce((acc, cur) => acc + +!!cur.new, 0) || 0
  ));
  const setAsSee = () => newCount() && setAsSeeAction();

  return (
    <main class="font-sans grid place-items-center min-h-screen bg-c-grayish">
      <article class="bg-white p-4 rounded-xl max-w-170">
        <header class="flex my-6 items-center gap-2">
          <h1 class="text-2xl font-bold">Notification</h1>
          {newCount && <p class="p-(y1 x3) bg-c-blue text-white text-xs font-bold rounded-lg">{newCount}</p>}
          <button type="button" class="ml-auto text-gray-500" onClick={setAsSee}>
            Mark all as read
          </button>
        </header>
        <ul class="space-y-2">
          <For each={notifications()}>
            {(data) => <NotificationLi {...data} />}
          </For>
        </ul>
      </article>
    </main>
  );
}
