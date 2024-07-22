import { UserList } from "@/components/UserList";
import { trpc } from "@/utils/trpc";

export default async function Account() {
  const data = await trpc.account.list.query();
  return (
    <main>
      {JSON.stringify(data)}
      <UserList></UserList>
      <div>Account</div>
    </main>
  );
}
