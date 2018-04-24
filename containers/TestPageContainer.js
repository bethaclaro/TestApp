import { TabNavigator } from 'react-navigation';
import GasCalcContainer from './GasCalcContainer';
import ParkingCalcContainer from './ParkingCalcConatiner';

export default TabNavigator({
    Parking: {screen: ParkingCalcContainer},
    Gas: {screen: GasCalcContainer}
})