import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { User } from "@//lib/payload/payload-types";
import { getClientSideURL } from "./getURL";
import { Route } from "next";

export const getMeUser = async (args?: {
  nullUserRedirect?: string;
  validUserRedirect?: string;
}): Promise<{
  token: string;
  user: User;
}> => {
  const { nullUserRedirect, validUserRedirect } = args || {};
  const cookieStore = await cookies();
  const token = cookieStore.get("payload-token")?.value;

  const meUserReq = await fetch(`${getClientSideURL()}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  const {
    user,
  }: {
    user: User;
  } = await meUserReq.json();

  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect as Route);
  }

  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect as Route);
  }

  // Token will exist here because if it doesn't the user will be redirected
  return {
    token: token!,
    user,
  };
};
