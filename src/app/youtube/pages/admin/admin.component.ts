import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  DATE_PATTERN,
  HOME_PAGE,
  MIN_DESCRIPTION_LENGTH,
  MIN_TITLE_LENGTH,
  URL_PATTERN
} from '../../../constants/common';
import {CustomCard} from '../../../shared/models/card.model';
import * as fromRoot from '../../../redux/reducers';
import * as cardAction from '../../../redux/actions/cards.action';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
             selector: 'app-admin',
             templateUrl: './admin.component.html',
             styleUrls: ['./admin.component.css']
           })
export class AdminComponent implements OnInit {
  private counter: number = 0;
  public newCardForm: FormGroup;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
  }

  private handleCreate(card: CustomCard): void {
    if (card.title && card.description && card.imgLink && card.videoLink) {
      this.store.dispatch(new cardAction.AddCard(card));
      this.router.navigate([`/${HOME_PAGE}`]);
    }
  }

  public ngOnInit(): void {
    this.newCardForm = new FormGroup({
                                       title: new FormControl(null, [
                                         Validators.required,
                                         Validators.minLength(MIN_TITLE_LENGTH),
                                       ]),
                                       description: new FormControl(null, [
                                         Validators.required,
                                         Validators.minLength(MIN_DESCRIPTION_LENGTH),
                                       ]),
                                       imgLink: new FormControl(null, [
                                         Validators.required,
                                         Validators.pattern(URL_PATTERN),
                                       ]),
                                       videoLink: new FormControl(null, [
                                         Validators.required,
                                         Validators.pattern(URL_PATTERN),
                                       ]),
                                       creationDate: new FormControl(null, [
                                         Validators.pattern(DATE_PATTERN),
                                       ])
                                     });
  }

  public createNewCard(): void {
    const title: string = this.newCardForm.controls.title.value;
    const description: string = this.newCardForm.controls.description.value;
    const imgLink: string = this.newCardForm.controls.imgLink.value;
    const videoLink: string = this.newCardForm.controls.videoLink.value;

    let creationDate: string = this.newCardForm.controls.creationDate.value;
    if (!creationDate) {
      creationDate = new Date().toISOString();
    }
    this.newCardForm.controls.description.setValue(creationDate);

    if (this.newCardForm.valid) {
      this.handleCreate(new CustomCard(this.counter++, title, description, imgLink, videoLink, creationDate));
    }
  }
}
