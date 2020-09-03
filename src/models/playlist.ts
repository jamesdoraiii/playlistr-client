import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Image } from './image';
import { Owner } from './owner';

export class Playlist {
  collaborative: boolean;
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
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}
