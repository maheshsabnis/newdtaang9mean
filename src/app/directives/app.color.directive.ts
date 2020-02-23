import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setColor]',
})
export class ColorDirective {
   @Input('setColor') setColor: string;
   constructor(private element: ElementRef, private renderer: Renderer2){}

   private applyColor(color: string): void {
      this.renderer.setStyle(this.element.nativeElement,
         'backgroundColor', color);
   }

   @HostListener('mouseenter')
   onmouseenter(): void {
     this.applyColor(this.setColor || 'magenta');
   }
   @HostListener('mouseleave')
   onmouseleave(): void {
     this.applyColor(null);
   }
}
