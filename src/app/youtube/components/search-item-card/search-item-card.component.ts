import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import {faComments, faEye, faHeart, faHeartBroken, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {findDateDiff} from '../../../shared/utils/date.utils';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.css']
})
export class SearchItemCardComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faComments: IconDefinition = faComments;
  public item: SearchItem;
  public borderClass: string;

  constructor(private http: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.http.fetchYouTubeData()
        .subscribe((searchResponse) =>
                     this.item = searchResponse.items.find(item => item.id === params.id));
                                });
  }

  public ngOnInit(): void {
    let dateDiff: { [p: string]: number } = findDateDiff(this.item);
    if (dateDiff.diffDays > -7) {
      this.borderClass = 'public_date_seven_days';
    } else {
      this.borderClass = dateDiff.diffMonth > -1 ? 'public_date_month' :
        (dateDiff.diffMonth < -6 ? 'public_date_six_month' : 'public_date_default');
    }
  }

}
