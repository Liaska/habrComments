export interface IAsyncState {
  loading: boolean;
  errorMessages: string | null;
}

export type TCommentsData = {
  id: number;
  author: string;
  message: string;
  likes?: number;
  children: TCommentsData | [];
}[];

export type TUser = {
  email: string;
  displayName?: string;
  createdAt: number;
};