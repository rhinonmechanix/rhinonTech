import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopsService } from './laptops.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  // laptops = [
  //   {"id":1, "imgSource":"../../assets/images/controller.png", "heading":"Black Friday"},
  //   {"id":2, "imgSource":"../../assets/images/tablet.png", "heading":"Tablets"},
  //   {"id":3, "imgSource":"../../assets/images/headphones.png", "heading":"headphones"},
  //   {"id":3, "imgSource":"../../assets/images/keyboard_mouse.png", "heading":"keyboard & mouse"},
  // ]
  laptopArr: any[] = [];

  constructor( private router: Router, private laptopService: LaptopsService){

  }

  data: any;

  ngOnInit() {
    this.getLaptops()
  }

  onClick(laptop:any){
    this.router.navigate(['/laptops', laptop.id], { queryParams: { id: laptop.id } });
  }

  getLaptops(){
    this.laptopService.getData().subscribe((response) => {
      if (response.data && Array.isArray(response.data)) {
        response.data.forEach((element: any) => {
          const laptopEntry = new Laptop(
            element._id,
            element.model,
            element.brand,
            element.weight,
            element.colour,
            element.os,
            element.image1,
            element.image2,
            element.image3,
            element.image4,
            element.image5,
            element.displaySize,
            element.displayResolution,
            element.pixelDensity,
            element.displayType,
            element.displayFeatures,
            element.touchscreen,
            element.processor,
            element.clockSpeed,
            element.graphicProcessor,
            element.capacity,
            element.ramType,
            element.memorySlots,
            element.memoryLayout,
            element.ssdCapacity,
            element.batteryCell,
            element.batterytype,
            element.powerSupply,
            element.usbSlot,
            element.headphoneJack,
            element.microphoneJack,
            element.wirelessLAN,
            element.wifiVersion,
            element.bluetooth,
            element.bluetoothVersion,
            element.warranty,
          );
          this.laptopArr.push(laptopEntry);
        });
        console.log("Laptop Details: " + JSON.stringify(this.laptopArr));
        this.laptopService.setLaptops(this.laptopArr);
      } else {
        console.log("Error: data is not an array.");
      }
    });
  }
}

export class Laptop {
  constructor(
    public id: string,
    public model: string,
    public brand: string,
    public weight: string,
    public colour: string,
    public os: string,
    public image1: string,
    public image2: string,
    public image3: string,
    public image4: string,
    public image5: string,
    public displaySize: string,
    public displayResolution: string,
    public pixelDensity: string,
    public displayType: string,
    public displayFeatures: string,
    public touchscreen: string,
    public processor: string,
    public clockSpeed: string,
    public graphicProcessor: string,
    public capacity: string,
    public ramType: string,
    public memorySlots: string,
    public memoryLayout: string,
    public ssdCapacity: string,
    public batteryCell: string,
    public batterytype: string,
    public powerSupply: string,
    public usbSlot: string,
    public headphoneJack: string,
    public microphoneJack: string,
    public wirelessLAN: string,
    public wifiVersion: string,
    public bluetooth: string,
    public bluetoothVersion: string,
    public warranty: string,
  ) {}
}

export class LaptopImage {
  constructor(
    public image1: string,
    public image2: string,
    public image3: string,
    public image4: string,
    public image5: string,
  ) {}
}