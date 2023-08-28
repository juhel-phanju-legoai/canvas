export type TGlossary = {
  id: number;
  masterId: string;
  technicalName: string;
  name: string;
  type: string;
  dataType: [string, string] | [];
  businessGlossary: string;
  tags: string[];
  invalidCount: number;
  validCount: number;
  nullCount: number;
  // sampleData: string[];
  sampleData: string;
  subset?: TGlossary[];
};
