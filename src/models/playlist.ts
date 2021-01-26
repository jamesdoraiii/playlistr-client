import { Image } from './image';
import { Owner } from './owner';

export class Playlist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: boolean;
  snapshot_id: string;
  tracks: any;
  type: string;
  uri: string;
}
