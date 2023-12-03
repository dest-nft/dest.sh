"use client";
import { useFormState, useFormStatus } from "react-dom";
import { ActionResult, IdleResult, pending } from "@/utils/action-result";
import { MaybePromise } from "@/utils/types";

export function useServerAction<I, S, E>(
  action: (
    state: ActionResult<I, S, E>,
    formData: FormData,
  ) => MaybePromise<ActionResult<I, S, E>>,
  state: IdleResult<I>,
): [ActionResult<I, S, E>, (formData: FormData) => void] {
  const [result, dispatch] = useFormState(action, state);
  const { pending: isPending } = useFormStatus();

  if (isPending) {
    return [pending(), dispatch];
  }

  return [result, dispatch];
}
