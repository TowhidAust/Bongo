import carbody from './designcar/carBody'
import carEngine from './designcar/carEngine'
import carSeats from './designcar/carSeats'
import carwheels from './designcar/carwheels'
class car{
      
    init(){
        new carbody().init();
        new carEngine().init();
        new carSeats().init();
        new carwheels().init();
    }
}

export default new car();