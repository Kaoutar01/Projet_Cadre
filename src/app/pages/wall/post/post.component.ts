import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { WavesurferComponent } from 'src/app/layouts/modals/wavesurfer/wavesurfer.component';
import { MatDialog } from '@angular/material';
import { GaleryComponent } from 'src/app/layouts/modals/galery/galery.component';
import { AddBidComponent } from 'src/app/layouts/modals/add-bid/add-bid.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Input() index: number;

  btn = 'play';

  totalText = 'Loading Text...';

  minText = this.totalText.substring(0, 100);

  text = this.minText + '...';

  state = false;

  buttonShowHideIcon = 'down';
  buttonShowHideColor = 'primary';

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.initReadMore();
  }

  ngAfterViewInit(): void {
    //  remove this following line when deploy
    this.data.recordUrl = 'assets/audio/dari.mp3';
  }

  wavesurfer() {
    this.dialog.open(WavesurferComponent, {
      width: '90%',
      panelClass: ['animated', 'bounceIn', 'faster'],
      disableClose: true,
      data: this.data.recordUrl
    });
  }

  galery() {
    this.dialog.open(GaleryComponent, {
      width: '95%',
      panelClass: ['animated', 'faceIn', 'faster'],
      data: this.data.imagesUrls
    });
  }

  bid() {
    this.dialog.open(AddBidComponent, {
      width: '95%',
      panelClass: ['animated', 'faceIn', 'faster'],
      data: 'uid'
    });
  }

  initReadMore() {
    this.totalText = this.data.content;
    this.minText = this.totalText.substring(0, 100);
    this.text = this.minText + '...';
    this.state = false;
  }

  readMore() {
    if (!this.state) {
      this.text = this.totalText;
      this.buttonShowHideIcon = 'up';
      this.buttonShowHideColor = 'accent';
    } else {
      this.text = this.minText + '...';
      this.buttonShowHideIcon = 'down';
      this.buttonShowHideColor = 'primary';
    }
    this.state = !this.state;
  }

}
