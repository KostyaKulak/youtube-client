import {SearchItem} from '../../youtube/models/search-item.model';

export interface CustomCard {
  id: number;
  title: string;
  description: string;
  imgLink: string;
  videoLink: string;
  creationDate: string;
}

export type Card = CustomCard | SearchItem;
