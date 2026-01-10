export const COUNTRIES = {
  INDIA: 'India',
  UNITED_STATES: 'United States',
  CANADA: 'Canada',
  AUSTRALIA: 'Australia',
  ISRAEL: 'Israel',
  NEW_ZEALAND: 'New Zealand',
  SINGAPORE: 'Singapore',
} as const;

export type Country = typeof COUNTRIES[keyof typeof COUNTRIES];