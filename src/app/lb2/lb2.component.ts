import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-lb2',
  standalone: true,
  imports: [],
  templateUrl: './lb2.component.html',
  styleUrl: './lb2.component.css'
})
export class Lb2Component implements AfterViewInit {

  ngAfterViewInit() {
    const l = document.getElementsByTagName('input')
    for (let i = 0; i < l.length; i++) {
      l[i].addEventListener('click', this.showValue.bind(this));
    }
  }

  showSquare(event: MouseEvent) {
    const target = event.target as HTMLParagraphElement;
    const number = parseInt(target.textContent || '0');
    target.textContent = (number * number).toString();
  }
  checkLength(event: Event) {
    const input = event.target as HTMLInputElement;
    const expectedLength = parseInt(input.getAttribute('data-length') || '0');
    const actualLength = input.value.length;

    if (actualLength === expectedLength) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  }
  showImageSrc(image: HTMLImageElement) {
    alert(image.src);
  }
  color = '';
  toggleColor(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    target.style.border = '1px solid';
    if (this.color === '') {
      target.style.borderColor = 'red';
      this.color = 'red';
    } else if (this.color === 'red') {
      target.style.borderColor = 'green';
      this.color = 'green';
    } else {
      target.style.borderColor = 'red';
      this.color = 'red';
    }
    target.style.backgroundColor = this.getRandomColor();
  }
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  setTitle(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.setAttribute('title', target.textContent!);
  }

  clearTitle(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.removeAttribute('title');
  }

  addHrefToTitle(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const href = target.getAttribute('href');
    target.setAttribute('title', `${target.textContent} (${href})`);
  }

  removeHrefFromTitle(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.removeAttribute('title');
  }

  displayValue(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    document.getElementById('demo')!.textContent = target.value;
  }

  inputClicked: boolean = false;

  showValue(event: MouseEvent) {
    if (!this.inputClicked) {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      alert(value);
      this.inputClicked = true;
    }
  }

}
