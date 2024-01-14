import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PageBannerComponent {

}
