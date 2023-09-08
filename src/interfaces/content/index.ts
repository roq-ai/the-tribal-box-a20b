import { PlatformInterface } from 'interfaces/platform';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  body: string;
  platform_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  platform?: PlatformInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  platform_id?: string;
  user_id?: string;
}
