export interface Wine {
  winery: string;
  wine: string;
  rating: {
    average: number;
    reviews: number;
  };
  location: string;
  image: string;
  id: number;
}
