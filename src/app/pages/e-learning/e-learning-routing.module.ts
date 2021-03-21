import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningComponent } from './e-learning.component';
import { TextbookComponent } from './textbook/textbook.component';
import { StorybookComponent } from './storybook/storybook.component';

const routes: Routes = [
    {
        path: 'textbook',
        component: TextbookComponent,
        data: {
            title: 'TextBook'
        }
    },
    {
        path: 'storybook',
        component: StorybookComponent,
        data: {
            title: 'StoryBook'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ElearningRoutingModule { }
