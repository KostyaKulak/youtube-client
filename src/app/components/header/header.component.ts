import {Component, OnInit} from '@angular/core';
import {faSlidersH, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSlidersH = faSlidersH;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService) {
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.searchForm = this.fb.group(
      {search: ["", [Validators.required]]},
      {updateOn: "blur"}
      );
  }

  public onSubmit(): void {
    this.data.displayResults();
  }

}
