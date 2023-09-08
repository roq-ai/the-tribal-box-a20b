import { UserInterface } from 'interfaces/user';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id: string;
  visited_at?: any;
  platform_id: string;
  interest?: string;
  location?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  platform?: PlatformInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  platform_id?: string;
  interest?: string;
  location?: string;
}
