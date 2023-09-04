export type TGlossary = {
  id: number;
  masterId: string;
  technicalName: string;
  name: string;
  type: string;
  dataTypes: [string, string] | [];
  bussinessGlossary: string;
  tags: any[];
  invalidCount: number;
  validCount: number;
  nullCount: number;
  // sampleData: string[];
  subset?: TGlossary[];
};
