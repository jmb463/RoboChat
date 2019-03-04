//Core
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

//Modules
import { AppRoutingModule } from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';
import {NgxLoadingModule} from 'ngx-loading';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//Services
import {AlertService} from './services/alert.service';
import {LoadingService} from './services/loading.service';
import {AuthService} from './services/auth.service';
import {ChatroomService} from './services/chatroom.service';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';

//Guard
import {AuthGuard} from './guards/auth.guard';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ChatroomTitleBarComponent,
    ChatComponent,
    ChatroomListComponent,
    ChatMessageComponent,
    ChatInputComponent,
    ChatroomWindowComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    BsDropdownModule.forRoot()
  ],
  providers: [AlertService,LoadingService,AuthService,AuthGuard,ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule {}

