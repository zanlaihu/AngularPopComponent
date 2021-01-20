import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-component',
  templateUrl: './pop-component.component.html',
  styleUrls: ['./pop-component.component.css',
  ]
})
export class PopComponentComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() showPopup: boolean;
  @Input() closebtn: boolean = true;
  @Output() popupData = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.width = this.width != undefined ? this.width : 500;
  }

  getStyle() {
    return { width: this.width + 'px', height: this.height + 'px' }
  }

  closePopupFn() {
    this.showPopup = false;
    this.popupData.emit(this.showPopup);
  }

}
