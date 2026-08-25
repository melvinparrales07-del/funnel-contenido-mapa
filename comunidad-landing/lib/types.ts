export interface LeadData {
  name: string;
  email: string;
  marketingConsent: boolean;
  businessStage: string;
  businessType: string;
  monthlyRevenue: string;
  biggestProblem: string;
  ninetyDayGoal: string;
}

export type LeadDataPartial = Partial<LeadData>;
