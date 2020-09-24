import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import {faComments, faEye, faHeart, faHeartBroken, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faComments: IconDefinition = faComments;
  @Input() public item: SearchItem;
  public borderClass: string;

  constructor() {
  }

  private dateDiff(): { [key: string]: number } {
    let publicDate: Date = new Date(this.item.snippet.publishedAt);
    let diffMs: number = (publicDate.valueOf() - new Date().valueOf());
    let diffDays: number = Math.floor(diffMs / 86400000);
    let diffHrs: number = Math.floor((diffMs % 86400000) / 3600000);
    let diffMins: number = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    let diffMonth: number = diffDays / 31;
    return {
      diffMs: diffMs,
      diffDays: diffDays,
      diffHrs: diffHrs,
      diffMins: diffMins,
      diffMonth: diffMonth
    };
  }

  public ngOnInit(): void {
    let dateDiff: { [p: string]: number } = this.dateDiff();
    if (dateDiff.diffDays > -7) {
      this.borderClass = 'public_date_seven_days';
    } else {
      this.borderClass = dateDiff.diffMonth > -1 ? 'public_date_month' :
        (dateDiff.diffMonth < -6 ? 'public_date_six_month' : 'public_date_default');
    }
  }

}
