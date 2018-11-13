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
          return { ok: true, newCard: response.data };
        })
        .catch(error => {
          return { ok: false };
        });
    } else return { ok: false };
  };

  editCard = async card => {
    console.log(card);
    if (card.description) {
      return this.apiClient()
        .put(ENDPOINTS.CARDS + '/' + card.id, card)
        .then(response => {
          console.log(response);
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
