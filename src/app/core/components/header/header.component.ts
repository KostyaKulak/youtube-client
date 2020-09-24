import {Component, OnInit} from '@angular/core';
import {faSlidersH, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {AuthUserService} from '../../services/auth-user.service';
import {UserHolderService} from '../../services/user-holder.service';
import {of} from 'rxjs';
import {User} from '../../../shared/models/user.model';

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
    public authUserService: AuthUserService,
    private data: DataService,
    public userHolderService: UserHolderService
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

  public onSubmit(): void {
  }

  public showFilter(): void {
    this.data.displayFilter();
  }

}
