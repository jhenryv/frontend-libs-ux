import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
// import { AppCurrentFlowStore } from "@vuce2/vuce2-core";
// import { KeycloakService } from "keycloak-angular";
// import { fromEvent, Subscription } from "rxjs";


@Component({
    selector:'vuce2-header',
    templateUrl: './vuce2-header.component.html',
    styleUrls:['./vuce2-header.component.scss']
})
export class Vuce2HeaderComponent implements OnInit {

    @Input()
    userName: string;

    @Output() logoutEvent = new EventEmitter<boolean>();
    
    constructor(
        private router: Router,
    ) 
    { 
        this.userName='';
    }
    
    ngOnInit(): void 
    {
        //console.log('entro a ngOnInit');
        // const name = localStorage.getItem("vuce2-vuce.usuario");
        // this.nombre = name!;
        // this.getUsuario();
        // this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-user-change').subscribe((e) => this.onEventHandler(e));
        
    }

    onHome(){
        this.router.navigateByUrl('/home')
    }

    onLogin(){
        // const name = localStorage.getItem("vuce2-vuce.usuario");
        // this.nombre = name!;
        //this.router.navigate(['/login'])
    }

    onLogout(){
        //this.keycloakService.logout();
        this.logoutEvent.emit(true);
    }

    // onEventHandler(e: CustomEvent) {
    //     //console.log('onEventHandler',e);
    //     if(e.detail){
    //         const response = e.detail;
    //         if(response.change){
    //             this.getUsuario();
    //         }
    //     }
    // }

    // getUsuario(){
    //     const current = this.storeCurrent.currentFlowAction.get();
    //     //console.log(current);
        
    //     if(current){
    //         const { usuario } = current;
    //         if(usuario && usuario.username)
    //         {
    //             this.nombre = usuario.username;
    //         }
    //     }
    // }
}
