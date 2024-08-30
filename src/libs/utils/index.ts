type PickByValue<T, V> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends V ? K : never;
  }[keyof T]
>;

export type Entries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]];
}[keyof T][];

export type RequiredNonNullableObject<T extends object> = {
  [P in keyof Required<T>]: NonNullable<T[P]>;
};

export const getEntries = <T extends object>(obj: T) => {
  const entries = Object.entries(obj) as Entries<T>;

  return entries?.filter((entry) => !!entry?.[0] && !!entry?.[1]) as Entries<
    RequiredNonNullableObject<T>
  >;
};

export const sortDescending = (a: string, b: string) => {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  if (Number.isNaN(numA) && Number.isNaN(numB)) {
    return a.localeCompare(b);
  }

  if (Number.isNaN(numA)) {
    return 1;
  }

  if (Number.isNaN(numB)) {
    return -1;
  }

  return numB - numA;
};
