const IDLE = "IDLE";
const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

export type IdleResult<I = never> = { tag: typeof IDLE; value: I };
export type PendingResult = { tag: typeof PENDING };
export type SuccessResult<S = never> = { tag: typeof SUCCESS; value: S };
export type FailResult<E = unknown> = { tag: typeof FAIL; error: E };

export type ActionResult<I = never, S = never, E = unknown> =
  | IdleResult<I>
  | PendingResult
  | SuccessResult<S>
  | FailResult<E>;

export function idle<const I = never>(value?: I): IdleResult<I> {
  return { tag: IDLE, value: value as I };
}

export function isIdle<I, S, E>(
  result: ActionResult<I, S, E>,
): result is IdleResult<I> {
  return result.tag === IDLE;
}

export function pending(): PendingResult {
  return { tag: PENDING };
}

export function isPending<I, S, E>(
  result: ActionResult<I, S, E>,
): result is PendingResult {
  return result.tag === PENDING;
}

export function success<const S = never>(value?: S): SuccessResult<S> {
  return { tag: SUCCESS, value: value as S };
}

export function isSuccess<I, S, E>(
  result: ActionResult<I, S, E>,
): result is SuccessResult<S> {
  return result.tag === SUCCESS;
}

export function fail<const E = never>(error?: E): FailResult<E> {
  return { tag: FAIL, error: error as E };
}

export function isFail<I, S, E>(
  result: ActionResult<I, S, E>,
): result is FailResult<E> {
  return result.tag === FAIL;
}
