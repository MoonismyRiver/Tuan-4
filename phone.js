class Battery{
    energy
    constructor(energy) {
        this.energy=energy;
    }
}
class Phone{
    battery;
    memoryDen=[];
    memoryDaGui=[];
    message ='';
    status = false;

    constructor(battery) {
        this.battery=battery;
    }
    send(phone){
        if(status){
            this.memoryDaGui.push(this.message);
            phone.memoryDen.push(this.message);
        }
    }
    turnOn{
        this.status=true;
    }
    turnOff{
        this.status=false;
}

}
let iphone6=new Phone(5);
let iphone6=new Phone(6);