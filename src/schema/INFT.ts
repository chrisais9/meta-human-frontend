export default interface INFT {
  id: number;
  name: string;
  image: string;
  color: string;
  attributes: [
    {
      trait_type: string;
      value: string;
    }
  ];
}
