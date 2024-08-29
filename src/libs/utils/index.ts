type PickByValue<T, V> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends V ? K : never;
  }[keyof T]
>;

type Entries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]];
}[keyof T][];

type RequiredNonNullableObject<T extends object> = {
  [P in keyof Required<T>]: NonNullable<T[P]>;
};

export const getEntries = <T extends object>(obj: T) => {
  const entries = Object.entries(obj) as Entries<T>;

  return entries?.filter((entry) => !!entry?.[0] && !!entry?.[1]) as Entries<
    RequiredNonNullableObject<T>
  >;
};
