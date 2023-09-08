import { ContentInterface } from 'interfaces/content';
import { GuestInterface } from 'interfaces/guest';
import { SearchInterface } from 'interfaces/search';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content?: ContentInterface[];
  guest?: GuestInterface[];
  search?: SearchInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    content?: number;
    guest?: number;
    search?: number;
    team_member?: number;
  };
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
