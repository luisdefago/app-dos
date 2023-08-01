import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './shop';
import CartNavigator from './cart';
import OrdersNavigator from './orders';
import { COLORS } from '../themes';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Inter-Bold',
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
            }}>
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarLabel: 'Tienda',
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={20}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Ionicons
                                name={focused ? 'cart' : 'cart-outline'}
                                size={20}
                                color={color}
                            />
                        );
                    },
                    tabBarBadge: cartItems.length,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                        fontFamily: 'Inter-Regular',
                        fontSize: 11,
                    },
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarLabel: 'Ordenes',
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Ionicons
                                name={focused ? 'file-tray' : 'file-tray-outline'}
                                size={20}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabNavigator;
