import { Routes } from '@angular/router';
import {DiscussionComponent} from "./components/chat/discussion/discussion.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {TextAreaComponent} from "./components/chat/text-area/text-area.component";
import {ProfileComponent} from "./components/chat/profile/profile.component";
import {MessagerieWindowComponent} from "./components/chat/messagerie-window/messagerie-window.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'messagerie', component: DiscussionComponent  },
  { path: 'textAreaComponent', component: TextAreaComponent  },
  { path: 'profileComponent', component: ProfileComponent  },
  { path: 'MessagerieAppComponent', component: MessagerieWindowComponent  }
];
