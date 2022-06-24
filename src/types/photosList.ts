export interface IPhotos {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  like?: boolean;
}
