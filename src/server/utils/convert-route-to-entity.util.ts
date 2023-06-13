const mapping: Record<string, string> = {
  clinics: 'clinic',
  documents: 'document',
  patients: 'patient',
  questionnaires: 'questionnaire',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
