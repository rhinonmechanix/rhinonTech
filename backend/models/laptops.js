const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  price: {
    type: String,
    required: false
  },
  model: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  },
  colour: {
    type: String,
    required: false
  },
  os: {
    type: String,
    required: false
  },
  image1: {
    type: String,
    required: false
  },
  image2: {
    type: String,
    required: false
  },
  image3: {
    type: String,
    required: false
  },
  image4: {
    type: String,
    required: false
  },
  image5: {
    type: String,
    required: false
  },
  displaySize: {
    type: String,
    required: false
  },
  displayResolution: {
    type: String,
    required: false
  },
  pixelDensity: {
    type: String,
    required: false
  },
  displayType: {
    type: String,
    required: false
  },
  displayFeatures: {
    type: String,
    required: false
  },
  touchscreen: {
    type: String,
    required: false
  },
  processor: {
    type: String,
    required: false
  },
  clockSpeed: {
    type: String,
    required: false
  },
  graphicProcessor: {
    type: String,
    required: false
  },
  capacity: {
    type: String,
    required: false
  },
  ramType: {
    type: String,
    required: false
  },
  memorySlots: {
    type: String,
    required: false
  },
  memoryLayout: {
    type: String,
    required: false
  },
  ssdCapacity: {
    type: String,
    required: false
  },
  batteryCell: {
    type: String,
    required: false
  },
  batterytype: {
    type: String,
    required: false
  },
  powerSupply: {
    type: String,
    required: false
  },
  usbSlot: {
    type: String,
    required: false
  },
  headphoneJack: {
    type: String,
    required: false
  },
  microphoneJack: {
    type: String,
    required: false
  },
  wirelessLAN: {
    type: String,
    required: false
  },
  wifiVersion: {
    type: String,
    required: false
  },
  bluetooth: {
    type: String,
    required: false
  },
  bluetoothVersion: {
    type: String,
    required: false
  },
  warranty: {
    type: String,
    required: false
  },
});

const Laptop = mongoose.model("Laptop", laptopSchema);

module.exports = Laptop;