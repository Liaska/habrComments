export interface IAsyncState {
  loading: boolean;
  errorMessages: string | null;
}

export type TObjectKey<T> = T[keyof T];
// type TAsyncState = string | boolean | any[] | object | null;
