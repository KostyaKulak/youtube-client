import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public hidden: boolean;

  constructor(private data: DataService) {
  }

  public ngOnInit(): void {
    this.data.currentFilterHiddenState.subscribe(hidden => this.hidden = hidden);
  }
}
