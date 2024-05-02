import { Component, Input } from '@angular/core';
import { News } from '@core/models';
import { NewsListComponent } from '../news-list/news-list.component';

@Component({
  selector: 'app-news-widget',
  standalone: true,
  imports: [NewsListComponent],
  templateUrl: './news-widget.component.html',
})
export class NewsWidgetComponent {
  @Input() newsList!: Array<News>;
}
