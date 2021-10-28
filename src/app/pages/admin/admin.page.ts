import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private authSvc: AuthService,
              private navCtrl: NavController,
              private toastr:ToastrService) { }

  ngOnInit() {
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        this.navCtrl.navigateForward('admin/categorias');
        
      }
    } catch (error) {
      this.toastr.error('Usuario o contraseña incorrectos');
    }
  }

}
