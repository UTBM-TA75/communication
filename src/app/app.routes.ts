import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ChatComponent} from "./pages/chat/chat/chat.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'chat', component: ChatComponent  }
];
