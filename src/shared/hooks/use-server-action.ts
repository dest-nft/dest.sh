"use client";
import { useFormState } from "react-dom";
import { Option } from "@/shared/utils/option";
import { Result } from "@/shared/utils/result";
import { MaybePromise } from "@/shared/utils/types";

export function useServerAction<E, S>(
  action: (
    state: Option<Result<E, S>>,
    formData: FormData,
  ) => MaybePromise<Result<E, S>>,
  state: Option<Result<E, S>>,
): [Option<Result<E, S>>, (formData: FormData) => void] {
  const [result, dispatch] = useFormState(action, state);
  return [result, dispatch];
}
