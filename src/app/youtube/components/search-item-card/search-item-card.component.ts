import {Component, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import {faComments, faEye, faHeart, faHeartBroken, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {getBorderClass} from '../../../shared/utils/class.utils';

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
  public loading: boolean;

  constructor(private http: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.http.fetchYouTubeData()
        .subscribe({
                     next: (searchResponse) => {
                       this.loading = true;
                       this.item = searchResponse.items.find(item => item.id === params.id);
                       this.borderClass = getBorderClass(this.item);
                     },
                     error: null,
                     complete: () => this.loading = false
                   });
    });
  }

  public ngOnInit(): void {  }

}
