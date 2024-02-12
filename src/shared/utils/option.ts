export type Option<T> = T | null;

export function none(): null {
  return null;
}

export function isNone<T>(option: Option<T>): option is null {
  return option === null;
}

export function some<T>(value: T): T {
  return value;
}

export function isSome<T>(option: Option<T>): option is T {
  return option !== null;
}
