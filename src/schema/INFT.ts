export default interface INFT {
  id: number;
  name: string;
  image: string;
  color: string;
  attributes: Attribute[];
}

interface Attribute {
  trait_type: string;
  value: string;
}
