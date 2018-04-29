import { TabNavigator, DrawerNavigator } from 'react-navigation';
import GasCalcContainer from './GasCalcContainer';
import ParkingCalcContainer from './ParkingCalcConatiner';

export default DrawerNavigator({
    Gas: {screen: GasCalcContainer},
    Parking: {screen: ParkingCalcContainer}
})