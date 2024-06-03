export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };};
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export const offers: OfferType[] = [
  {
    id: 'dbd2cc98-9146-45e3-b4ed-384780dbc16c',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 522,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },},
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
  }, {
    id: 'f4e0244a-69a7-431c-b071-29c687695890',
    title: 'Wood and stone place',
    type: 'house',
    price: 829,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  }, {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg'
  }
];
