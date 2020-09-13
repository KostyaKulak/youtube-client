import {Component, OnInit} from '@angular/core';
import {faSlidersH, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {AuthUserService} from '../../services/auth-user.service';
import {UserHolderService} from '../../services/user-holder.service';
import {User} from '../../../shared/models/user.model';
import {YoutubeService} from '../../../youtube/services/youtube.service';
import {SearchResponse} from '../../../youtube/models/search-response.model';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../redux/reducers';
import * as cardAction from '../../../redux/actions/cards.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faSlidersH: IconDefinition = faSlidersH;
  public searchForm: FormGroup;
  public userName: string;

  constructor(
    private fb: FormBuilder,
    private youtubeService: YoutubeService,
    public authUserService: AuthUserService,
    private data: DataService,
    public userHolderService: UserHolderService,
    private store: Store<fromRoot.State>
  ) {
    of(this.userHolderService)
      .subscribe((service) => {
        const user: User = service.loadLastUser();
        if (user) {
          this.userName = user.name;
        }
      });
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.searchForm = this.fb.group(
      {search: ['', [Validators.required]]},
      {updateOn: 'blur'}
    );
  }

  public search(query: string): void {
    if (query.trim().length > 3) {
      this.store.dispatch(new cardAction.SearchCards(query));
      const result: Observable<SearchResponse> | void = this.youtubeService.searchYouTubeData(query);
      if (result instanceof Observable) {
        result.subscribe((response: SearchResponse) => {
          this.youtubeService.fetchVideos(response).subscribe((responseWithStats: SearchResponse) => {
            this.youtubeService.response = responseWithStats;
            this.youtubeService.currentData.next(responseWithStats);
          });
        });
      }
    }
  }

  public showFilter(): void {
    if (this.youtubeService.response) {
      this.data.displayFilter();
    }
  }

}
