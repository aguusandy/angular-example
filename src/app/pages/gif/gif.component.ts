import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit {

  urlImage: string;

  constructor(private gifservice: GifService) { }

  ngOnInit(): void {
    this.getGif();
  }

  getGif(){
    this.gifservice.getGif().subscribe({
      next: (data:any) => {
        this.urlImage = data.data.images.original.url;
      }
    });
  }

}
