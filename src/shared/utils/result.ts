const FAIL = "FAIL";
export type FailResult<E = unknown> = {
  readonly __tag: typeof FAIL;
  readonly error: E;
};

const SUCCESS = "SUCCESS";
export type SuccessResult<S = never> = {
  readonly __tag: typeof SUCCESS;
  readonly value: S;
};

export type Result<E = unknown, S = never> = FailResult<E> | SuccessResult<S>;

export function fail<const E = never>(error?: E): FailResult<E> {
  return { __tag: FAIL, error: error as E };
}

export function isFail<E, S>(result: Result<E, S>): result is FailResult<E> {
  return result.__tag === FAIL;
}

export function success<const S = never>(value?: S): SuccessResult<S> {
  return { __tag: SUCCESS, value: value as S };
}

export function isSuccess<E, S>(
  result: Result<E, S>,
): result is SuccessResult<S> {
  return result.__tag === SUCCESS;
}
