import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.page.html',
  styleUrls: ['./tugas.page.scss'],
})
export class TugasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toastButton = [
    {
      text: "Dismiss",
      role: "cancel",
      handler: () => {
        console.log("dismiss click");
      }
    }
  ]
}
