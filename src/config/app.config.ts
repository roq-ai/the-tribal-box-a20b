interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member', 'Content Creator'],
  tenantName: 'Platform',
  applicationName: 'The Tribal box ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View the content on the Platform',
    'Search for specific content on the Platform',
    'Sort the content on the Platform by different criteria',
  ],
  ownerAbilities: ['Manage Platforms', 'Invite Team Members and Content Creators to join the Platform'],
};
