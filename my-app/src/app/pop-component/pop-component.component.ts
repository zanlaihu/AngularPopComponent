import { Component } from '@angular/core';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'pop-component',
  templateUrl: './pop-component.component.html',
  styleUrls: ['./pop-component.component.css']
})
export class PopComponentComponent {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      }
    }
  ];
  footer2 = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal2');
      }
    }
  ];

  constructor() {}

  modelChange(event) {
    console.log('asdfasdf', event);
  }
  onClose(key) {
    this.state[key] = false;
  }

  showModal(key) {
    this.state[key] = true;
  }

  renderHeader() {
    return '委托买入';
  }
}
