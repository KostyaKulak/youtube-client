import { Card, CustomCard } from '../../shared/models/card.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  SELECT_CARD = '[Cards] Select Card',
  ADD_CARD = '[Cards] Add Card',
  SEARCH_CARDS = '[Cards] Search Cards',
  VIEW_CARDS = '[Cards] View Cards',
}

export class SelectCard implements Action {
  public readonly type: string = ActionTypes.SELECT_CARD;

  constructor(public payload: number) {}
}

export class AddCard implements Action {
  public readonly type: string = ActionTypes.ADD_CARD;

  constructor(public payload: CustomCard) {}
}

export class SearchCards implements Action {
  public readonly type: string = ActionTypes.SEARCH_CARDS;

  constructor(public payload: string) {}
}

export class ViewCards implements Action {
  public readonly type: string = ActionTypes.VIEW_CARDS;

  constructor(public payload: Card[]) {}
}

export type CardAction = AddCard | SelectCard | SearchCards | ViewCards;
