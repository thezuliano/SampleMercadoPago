import { Component, OnInit } from "@angular/core";
import { get } from "scriptjs";
declare var Mercadopago;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    get("https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js", () => {
      this.initializeMP();
    });
  }

  initializeMP() {
    // TEST-9d75455f-aee7-4b6e-9f2c-1454b1bae5b3
    console.log(Mercadopago);
    console.log(Mercadopago.key);
    Mercadopago.setPublishableKey("TEST-9d75455f-aee7-4b6e-9f2c-1454b1bae5b3");
    console.log(Mercadopago.getPaymentMethod({ bin: "450995" }, this.call));
  }

  call(status: any, response: any) {
    console.log(status);
    console.log(response);
  }
}
