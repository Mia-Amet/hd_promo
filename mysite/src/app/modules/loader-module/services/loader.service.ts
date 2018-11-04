import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { LoaderComponent } from "../components/loader.component";
import { ComponentPortal, DomPortalHost } from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private portalHost: DomPortalHost;
  private portal: ComponentPortal<LoaderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  start(): void {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#box'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Locate the component factory for the LoaderComponent
    this.portal = new ComponentPortal(LoaderComponent);

    // Attach portal to host
    this.portalHost.attach(this.portal);

    // Hide portal
    setTimeout(() => {
      this.portalHost.detach();
    }, 1300);
  }
}
