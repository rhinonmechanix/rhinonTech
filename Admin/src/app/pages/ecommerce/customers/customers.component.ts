import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Customers } from './customers.model';
import { EcommerceService } from '../ecommerce.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;

  customersData: Customers[];
  laptops: any[];
  currentLaptopId: any;

  constructor(
    public formBuilder: FormBuilder,
    private laptopService: EcommerceService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Customers', active: true }];
    this.getLaptops()
  }

  public uploadObj = {
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

  getLaptops() {
    this.laptopService.getLaptops().subscribe(
      (response) => {
        this.laptops = response.data;
        console.log(this.laptops); // Do something with the retrieved laptops
      },
      (error) => {
        console.error(error); // Handle any errors
      }
    );
  }

  successmsg() {
    Swal.fire({
      title: 'Success',
      text: 'Laptop Successfully Deleted!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#5438dc',
      cancelButtonColor: '#ff3d60'
    });
  }

  updateLaptop(id: any) {
    const index = this.laptops.findIndex((item) => item._id === id);
    this.laptopService.updateLaptop(id, this.uploadObj).subscribe(
      (result: any) => {
        if (result.message === 'Success') {
          this.successmsg();
          if (index !== -1) {
            this.laptops[index] = { _id: id, ...this.uploadObj }; // Update the corresponding laptop object in the array
            console.log(this.laptops);
          }
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  extraLarge(exlargeModal: any, id: any) {
    this.modalService.open(exlargeModal, { size: 'xl' });
    this.currentLaptopId = id; // Store the ID in a variable
  }

  deleteLaptop(id: any) {
    const index = this.laptops.findIndex((item) => item._id === id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#ff3d60',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        if (index !== -1) {
          this.laptops.splice(index, 1);
          this.laptopService.deleteLaptop(id).subscribe(
            (response) => {
              if (response.message === 'Success') {
                this.successmsg();
                console.log(this.laptops);
              }
            },
            (error) => {
              console.error('Error deleting laptop:', error);
            }
          );
        }
      }
    });
  }


  // deleteLaptop1(id: any) {
  //   const index = this.laptops.findIndex((item) => item._id === id);
  //   if (index !== -1) {
  //     this.laptops.splice(index, 1);
  //     this.laptopService.deleteLaptop(id).subscribe(
  //       (response) => {
  //         if (response.message === 'Success') {
  //           this.successmsg();
  //           console.log(this.laptops);
  //         }
  //       },
  //       (error) => {
  //         console.error('Error deleting laptop:', error);
  //         // Handle any errors
  //       }
  //     );
  //   }
  // }
  

}
