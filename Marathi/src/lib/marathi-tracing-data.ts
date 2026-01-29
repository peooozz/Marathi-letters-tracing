export interface TracingPath {
  id: string;
  d: string;
  order: number;
}

export interface MarathiTracingData {
  char: string;
  paths: TracingPath[];
}

export const marathiTracingData: Record<string, MarathiTracingData> = {
  'अ': {
    char: 'अ',
    paths: [
      { id: 'a-1', d: 'M 350,300 C 550,280 600,450 450,500', order: 1 }, // Top curve
      { id: 'a-2', d: 'M 450,500 C 700,530 650,850 350,800', order: 2 }, // Bottom curve
      { id: 'a-3', d: 'M 500,550 L 700,550', order: 3 },                 // Bridge
      { id: 'a-4', d: 'M 700,200 L 700,850', order: 4 },                 // Vertical bar
      { id: 'a-5', d: 'M 250,150 L 800,150', order: 5 }                  // Shirorekha
    ]
  },
  'आ': {
    char: 'आ',
    paths: [
      { id: 'aa-1', d: 'M 250,300 C 450,280 500,450 350,500', order: 1 },
      { id: 'aa-2', d: 'M 350,500 C 600,530 550,850 250,800', order: 2 },
      { id: 'aa-3', d: 'M 400,550 L 600,550', order: 3 },
      { id: 'aa-4', d: 'M 600,200 L 600,850', order: 4 },
      { id: 'aa-5', d: 'M 750,200 L 750,850', order: 5 },
      { id: 'aa-6', d: 'M 200,150 L 850,150', order: 6 }
    ]
  },
  'इ': {
    char: 'इ',
    paths: [
      { id: 'i-1', d: 'M 500,200 L 500,300', order: 1 },
      { id: 'i-2', d: 'M 500,300 C 300,300 300,500 500,500 C 700,500 700,700 500,700 C 350,700 350,850 450,850 L 300,900', order: 2 },
      { id: 'i-3', d: 'M 250,150 L 750,150', order: 3 }
    ]
  },
  'ई': {
    char: 'ई',
    paths: [
      { id: 'ee-1', d: 'M 500,200 L 500,300', order: 1 },
      { id: 'ee-2', d: 'M 500,300 C 300,300 300,500 500,500 C 700,500 700,700 500,700 C 350,700 350,850 450,850 L 300,900', order: 2 },
      { id: 'ee-3', d: 'M 500,200 C 550,100 650,150 650,150', order: 3 },
      { id: 'ee-4', d: 'M 250,150 L 750,150', order: 4 }
    ]
  },
  'उ': {
    char: 'उ',
    paths: [
      { id: 'u-1', d: 'M 350,300 C 550,280 600,450 450,500', order: 1 },
      { id: 'u-2', d: 'M 450,500 C 700,530 650,850 350,800', order: 2 },
      { id: 'u-3', d: 'M 250,150 L 750,150', order: 3 }
    ]
  },
  'क': {
    char: 'क',
    paths: [
      { id: 'k-1', d: 'M 500,200 L 500,850', order: 1 },
      { id: 'k-2', d: 'M 500,500 C 250,500 250,800 500,800 C 750,800 750,500 500,500', order: 2 },
      { id: 'k-3', d: 'M 500,500 C 750,500 850,700 750,850', order: 3 },
      { id: 'k-4', d: 'M 200,150 L 800,150', order: 4 }
    ]
  },
  'ख': {
    char: 'ख',
    paths: [
      { id: 'kh-1', d: 'M 350,300 C 500,300 500,500 300,800', order: 1 },
      { id: 'kh-2', d: 'M 300,800 L 700,800', order: 2 },
      { id: 'kh-3', d: 'M 700,200 L 700,850', order: 3 },
      { id: 'kh-4', d: 'M 700,550 C 550,550 550,750 700,750', order: 4 },
      { id: 'kh-5', d: 'M 250,150 L 850,150', order: 5 }
    ]
  }
};
