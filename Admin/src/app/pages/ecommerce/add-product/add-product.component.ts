import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;
  selectValue = ['Touchscreen', 'Call Function', 'Notifications', 'Fitness', 'Outdoor'];

  constructor(
    private router: Router,
    private uploadData: EcommerceService
    ) { }

  public uploadOjb = {
    price: "",
    model: "",
    brand: "",
    weight: "",
    colour: "",
    os: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    displaySize: "",
    displayResolution: "",
    pixelDensity: "",
    displayType: "",
    displayFeatures: "",
    touchscreen: "",
    processor: "",
    clockSpeed: "",
    graphicProcessor: "",
    capacity: "",
    ramType: "",
    memorySlots: "",
    memoryLayout: "",
    ssdCapacity: "",
    batteryCell: "",
    batterytype: "",
    powerSupply: "",
    usbSlot: "",
    headphoneJack: "",
    microphoneJack: "",
    wirelessLAN: "",
    wifiVersion: "",
    bluetooth: "",
    bluetoothVersion: "",
    warranty: "",
  };

  sendData() {
    console.log(this.uploadOjb);
    this.uploadData.uploadLaptop(this.uploadOjb).subscribe((result: any) => {
      if (result.message == 'Success'){
        this.successmsg()
      }
    });
  }

  successmsg() {
    Swal.fire({
      title: 'Success!',
      text: 'Your laptop details are uploaded!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#5438dc',
      // cancelButtonColor: '#ff3d60'
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Add Laptop', active: true }];
  }
}
