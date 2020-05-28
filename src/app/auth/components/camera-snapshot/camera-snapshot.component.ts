import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-camera-snapshot',
  templateUrl: './camera-snapshot.component.html',
  styleUrls: ['./camera-snapshot.component.css']
})
export class CameraSnapshotComponent implements OnInit {

  private mediaStream;
  @Input() imageUrl: string;
  @Output() imageCreated = new EventEmitter();
  @ViewChild('video') private video;
  @ViewChild('canvas') private canvas;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  getCameraImage() {
    // TODO Block UI and reset image
    this.imageUrl = undefined;
    this.imageCreated.emit(undefined);

    navigator.getUserMedia(
      {video:true},
      mediaStream => {
        this.mediaStream = mediaStream;
        this.video.nativeElement.srcObject = mediaStream;
        setTimeout(() => {
          // create screenshot and emit as dataUrl
          let ctx = this.canvas.nativeElement.getContext('2d');
          ctx.drawImage(this.video.nativeElement, 0, 0, 500, 380);
          this.imageUrl = this.canvas.nativeElement.toDataURL()
          this.imageCreated.emit(this.imageUrl);
          
          //stop video and blockUI
          this.mediaStream.getVideoTracks()[0].stop();
          // this.blockUI.stop();
          this.ref.detectChanges();
        }, 3000);
      },
      error => {});
  }

}
