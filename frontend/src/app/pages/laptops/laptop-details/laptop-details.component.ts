import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopsService } from '../laptops.service';
import { Laptop, LaptopImage } from '../laptops.component';
import { removeBackgroundFromImageUrl  } from 'remove.bg';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptopArr: any[] = [];
  laptopImageArr: any[] = [];
  laptops: any[] = [];
  constructor(
    private route : ActivatedRoute,
    private laptopService: LaptopsService
    ){}

  laptopId: string | null = null;

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.laptopId = params.get('id');
      console.log("Laptop ID: " + this.laptopId);
    });
    this.getLaptops()
  }

  image = this.laptopImageArr

  setImageSource(image: any) {
      this.laptopImageArr = image;
  }
  
  getLaptops(){
    this.laptopService.getData().subscribe((response) => {
      if (response.data && Array.isArray(response.data)) {
        response.data.forEach((element: any) => {
          if(element._id == this.laptopId){
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

            const laptopImageEntry = new LaptopImage(
              element.image1,
              element.image2,
              element.image3,
              element.image4,
              element.image5,
            );
            this.laptopImageArr.push(laptopImageEntry);
          }
        });
        console.log("Laptop Details: " + JSON.stringify(this.laptopArr));
        console.log("Laptop Image Details: " + JSON.stringify(this.laptopImageArr));
      } else {
        console.log("Error: data is not an array.");
      }
    });
  }

}


