import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromCards from './cards.reducer';
import {Card} from '../../shared/models/card.model';

export interface State {
  cards: fromCards.State;
}

export const reducers: ActionReducerMap<State> = {
  cards: fromCards.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: Action): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getCardState: MemoizedSelector<object, fromCards.State> = createFeatureSelector<fromCards.State>('cards');

export const getIds: MemoizedSelector<object, number[]> = createSelector(
  getCardState,
  fromCards.getIds,
);

export const getCards: MemoizedSelector<object, { [p: number]: Card }> = createSelector(
  getCardState,
  fromCards.getCards,
);

export const getSelected: MemoizedSelector<object, number | string> = createSelector(
  getCardState,
  fromCards.getSelected,
);

export const getSelectedCard: MemoizedSelector<object, Card> = createSelector(
  getSelected,
  getCards,
  (selectedId, cards) => {
    return {
      ...cards[selectedId]
    };
  }
);

export const getAllCards: MemoizedSelector<object, Card[]> = createSelector(
  getIds,
  getCards,
  (ids, cards) => {
    return ids.map(id => cards[id]);
  }
);
