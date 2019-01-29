import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgLoaderDirective]'
})
export class ImgLoaderDirective {
  @Input() appImgLoaderDirective: string;
  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.src = 'https://d36vjxsq82j5c3.cloudfront.net/media/catalog/category/resized/200_200_no_image.gif';
  }

  @HostListener('load', ['$event'])
  onLoad() {
    this.element.nativeElement.src = this.appImgLoaderDirective;
  }
}
