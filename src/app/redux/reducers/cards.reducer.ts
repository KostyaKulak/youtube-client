import { Card, CustomCard } from '../../shared/models/card.model';
import { SearchItem } from '../../youtube/models/search-item.model';
import { ActionTypes, CardAction } from '../actions/cards.action';

export interface State {
  query: string;
  ids: number[];
  cards: { [id: number]: Card };
  selected: string | number;
}

export const initialState: State = {
  ids: [],
  query: '',
  cards: [],
  selected: null,
};

/* tslint:disable*/
export function reducer(state: State = initialState, action: CardAction) {
  switch (action.type) {
    case ActionTypes.ADD_CARD: {
      const newCard: CustomCard = action.payload as CustomCard;
      return {
        ...state,
        ids: [...state.ids, newCard.id],
        cards: { ...state.cards, newCard },
      };
    }

    case ActionTypes.SELECT_CARD: {
      const id: number = action.payload as number;
      return {
        ...state,
        selected: id,
      };
    }

    case ActionTypes.SEARCH_CARDS: {
      const query: string = action.payload as string;
      return {
        ...state,
        query: query,
      };
    }

    case ActionTypes.VIEW_CARDS: {
      return {
        ...state,
        selected: null,
      };
    }

    default:
      return state;
  }
}

export const getIds: (state: State) => number[] = (state: State) => state.ids;
export const getQuery: (state: State) => string = (state: State) => state.query;
export const getCards: (state: State) => { [key: number]: Card } = (
  state: State
) => state.cards;
export const getSelected: (state: State) => number | string = (state: State) =>
  state.selected;
