import api from '../index.ts';

export default {
  getCountries: () => api.get('https://api.countrystatecity.in/v1/countries'),
  getStatesByCountry: (country: string) =>
    api.get(`https://api.countrystatecity.in/v1/countries/${country}/states`),
  getCitiesByState: (country: string, state: string) =>
    api.get(
      `https://api.countrystatecity.in/v1/countries/${country}/states/${state}/cities`,
    ),
};
