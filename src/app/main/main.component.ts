import { Component, ViewChild, ElementRef, AfterViewInit, AfterContentChecked } from '@angular/core';
const Typewriter = require('typewriter-effect/dist/core');


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements AfterViewInit, AfterContentChecked {
  @ViewChild('text') text!: ElementRef;

  toggleHand: Boolean = false;

  machieTyping() {
    let typewriter = new Typewriter(this.text.nativeElement, {
      loop: false,
    })
    typewriter.typeString('Are You looking for API?')
      .pauseFor(400)
      .deleteAll()
      .typeString('You need some examples?')
      .pauseFor(400)
      .deleteAll()
      .typeString('Grab my hand...')
      .pauseFor(400)
      .start();
  }

  ngAfterViewInit() {
    this.machieTyping()

  }
  ngAfterContentChecked() {
    if (!this.text) return
    if (this.text.nativeElement.innerText === 'Grab my hand...|') this.toggleHand = true
  }
}
