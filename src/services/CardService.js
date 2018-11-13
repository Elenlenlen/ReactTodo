import BaseService from './BaseService';

const ENDPOINTS = {
  CARDS: 'api/cards'
};

class CardService extends BaseService {
  getCards = async () => {
    return this.apiClient()
      .get(ENDPOINTS.CARDS)
      .then(response => {
        return { ok: true, cards: response.data };
      })
      .catch(error => {
        return { ok: false };
      });
  };

  addCard = async card => {
    if (card.description) {
      return this.apiClient()
        .post(ENDPOINTS.CARDS, card)
        .then(response => {
          console.log(response.data);
          return { ok: true, newCard: response.data };
        })
        .catch(error => {
          console.log(error);
          return { ok: false };
        });
    } else return { ok: false };
  };
}

const cardService = new CardService();
export default cardService;
