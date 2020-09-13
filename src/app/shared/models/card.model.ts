import {SearchItem} from '../../youtube/models/search-item.model';

export class CustomCard {
  public id: number;
  public title: string;
  public description: string;
  public imgLink: string;
  public videoLink: string;
  public creationDate: string;

  constructor(
    id: number,
    title: string,
    description: string,
    imgLink: string,
    videoLink: string,
    creationDate: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgLink = imgLink;
    this.videoLink = videoLink;
    this.creationDate = creationDate;
  }
}

export type Card = CustomCard | SearchItem;
