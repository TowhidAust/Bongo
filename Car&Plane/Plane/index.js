import carbody from './designPlane/carBody'
import carEngine from './designPlane/carEngine'
import carSeats from './designPlane/carSeats'
import carwheels from './designPlane/carwheels'
class car{
      
    init(){
        new carbody().init();
        new carEngine().init();
        new carSeats().init();
        new carwheels().init();
    }
}

export default new car();