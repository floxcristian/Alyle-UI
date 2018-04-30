// App
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '@alyle/ui';
import { LyButton } from './button';
import { LyRippleModule } from '@alyle/ui/ripple';
import { LyIconButton } from '@alyle/ui/icon-button';

@NgModule({
  imports: [CommonModule, LyRippleModule, ThemeModule],
  exports: [LyButton],
  declarations: [LyButton]
})
export class LyButtonModule {}
