const mapping: Record<string, string> = {
  contents: 'content',
  guests: 'guest',
  platforms: 'platform',
  searches: 'search',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
