import { UserInterface } from 'interfaces/user';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface SearchInterface {
  id?: string;
  query: string;
  user_id: string;
  platform_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  platform?: PlatformInterface;
  _count?: {};
}

export interface SearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  query?: string;
  user_id?: string;
  platform_id?: string;
}
