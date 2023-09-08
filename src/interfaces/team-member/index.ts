import { UserInterface } from 'interfaces/user';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  platform_id: string;
  joined_at?: any;
  left_at?: any;
  role: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  platform?: PlatformInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  platform_id?: string;
  role?: string;
}
