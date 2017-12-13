/**
 * Created by shwetabhat on 13/12/17.
 */
import React from 'react';
import { Router, Scene} from 'react-native-router-flux';
import Login from '../Login/Login'
import IDlistHome from '../IDlist/IDlistHome'
import Search from '../Search/Search'
import IDlistDetails from '../IDlist/IDlistDetails'
const RouterComponent =() =>{
    return (
        <Router>
            <Scene key="Main">
                <Scene key="LoginFlow" >
                    <Scene key="Main_log"
                           tabBarStyle={{backgroundColor:'#000'}} initial>

                        <Scene
                            key='Login'
                            component={Login}
                            title="Login"
                            navigationBarStyle={styles.navigationBarStyles}
                            hideNavBar={true}
                            hideTabBar={true}
                            initial
                        />
                        <Scene
                            key='IDlistHome'
                            component={IDlistHome}
                            title="Home"
                            navigationBarStyle={styles.navigationBarStyles}
                            hideNavBar={true}
                            hideTabBar={true}
                        />
                        <Scene
                            key='Search'
                            component={Search}
                            title="Search"
                            navigationBarStyle={styles.navigationBarStyles}
                            hideNavBar={true}
                            hideTabBar={true}
                        />
                        <Scene
                            key='IDlistDetails'
                            component={IDlistDetails}
                            title="IDlistDetails"
                            navigationBarStyle={styles.navigationBarStyles}
                            hideNavBar={true}
                            hideTabBar={true}
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};
const styles={
    navigationBarStyles:{
        backgroundColor: '#077CE5',
        width: '70%',
        height:'20%',

    }
}
export default RouterComponent;
