export type Person = {
    id: number;
    name: string;
    color?: string;
    mood?: number;
  };

  export type Sentence = {
    id: number;
    person?: Person;
    content: string;
  };