"use client";
import { useFormState } from "react-dom";
import { Result } from "@/shared/utils/result";
import { Maybe, MaybePromise } from "@/shared/utils/types";

export function useServerAction<E, S>(
  action: (
    state: Maybe<Result<E, S>>,
    formData: FormData,
  ) => MaybePromise<Result<E, S>>,
  state: Maybe<Result<E, S>>,
): [Maybe<Result<E, S>>, (formData: FormData) => void] {
  const [result, dispatch] = useFormState(action, state);
  return [result, dispatch];
}
