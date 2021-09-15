import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  qrData="http://www.facebook.cl";
  elementType: 'url'| 'img' | 'canvas' = 'canvas'
  constructor(private barcodeScanner:BarcodeScanner) { }

  ngOnInit() {
  }

}
