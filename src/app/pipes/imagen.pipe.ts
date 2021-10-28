import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500'): string {
    if ( !img ) {
      return './assets/no-image.jpg';
    }
    return img;
  }

}
