import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "./../shared";

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule]
})
export class AuthModule {}
