import { Component, OnInit, Input } from '@angular/core';
import { FilterItemInterface } from "../../../interfaces/filter";
import { FormGroup, ControlContainer} from '@angular/forms';

// -- Denise -- //
@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  public filterForm: FormGroup;
  @Input() filteritem: FilterItemInterface;
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.filterForm = <FormGroup>this.controlContainer.control;
  }

}
