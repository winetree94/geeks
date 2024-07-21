'use client';

import { trpc } from "@/utils/trpc";

export function UserList () {
  const userQuery = trpc.userList.useQuery();
  return (
    <main>
      <p>{JSON.stringify(userQuery.data || {})}</p>
      <div>Account</div>
    </main>
  );
}
