import { Injectable, Renderer2, ElementRef }       from '@angular/core';
import * as _chroma from 'chroma-js';
import { ProvidedInTheme } from '../alyle-ui.module';
import { LyTheme, StyleData } from '../theme.service';
import { shadowBuilder } from '../shadow';
const chroma = _chroma;

@Injectable(ProvidedInTheme)
export class LyShadowService {
  /** Default elevation */
  elevation: string | number = 1;
  constructor(
    private theme: LyTheme
  ) { }

  /** demo: setShadow(...[elevation, color]...) */
  setShadow(elementRef: ElementRef, renderer: Renderer2, val: [number, string], oldStyleData?: StyleData) {
    let keys: string;
    let elevation: string | number;
    let color = 'colorShadow';
    if (val) {
      keys = val.join();
      elevation = val[0];
      color = val[1] || color;
    } else {
      keys = `${this.elevation}`;
      elevation = this.elevation;
    }
    const newStyleData = this.theme.createStyle(`ly-${keys}`, this._css.bind(this), elevation, color);
    this.theme.updateClass(elementRef, renderer, newStyleData, oldStyleData);
    return newStyleData;
  }

  private _css(elevation: number, color: string = '') {
    return `${shadowBuilder(elevation, this.theme.colorOf(color))}`;
  }
}

