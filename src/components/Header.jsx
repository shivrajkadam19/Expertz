import Icon from 'react-native-vector-icons/MaterialIcons';
import MyPressable from '../Components/MyPressable';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Title } from 'react-native-paper';
const Header = ({ navigation, isStack, title }) => {
    return (
        <View style={styles.headerContainer}>
            <MyPressable
                style={{ marginLeft: 8 }}
                android_ripple={{ color: 'grey', radius: 20, borderless: true }}
                touchOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back" size={30} color="#ffffff" />
            </MyPressable>
            <MyPressable
                style={{ marginRight: 8 }}
                android_ripple={{ color: 'grey', radius: 20, borderless: true }}
                touchOpacity={0.6}
            // onPress={}
            >
                <Icon name="notifications" size={30} color="#ffffff" />
            </MyPressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingBottom: 0,
        backgroundColor: '#0984e3',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerText: {
        flex: 1,
        color: '#ffffff',
        fontSize: 30,
        fontFamily: 'WorkSans-Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    pressable: {
        marginVertical: 8,
        paddingVertical: 30,
        paddingHorizontal: 'auto',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#A1D5D5',
        borderRadius: 8,
    }
});

export default Header
