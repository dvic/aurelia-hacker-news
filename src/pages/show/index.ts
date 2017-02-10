import { inject } from 'aurelia-framework';
import { HackerNewsApi } from '../../services/api';
import { StoryList } from '../story-list';

@inject(HackerNewsApi)
export class ShowStories extends StoryList {
    fetchIds(): Promise<number[]> {
        return this.api.fetch('showstories');
    }
}
