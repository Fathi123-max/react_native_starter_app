import { Image, Text, View } from "react-native";
import styles from "./Styles";

const Header = () => {

  return (
    <View
      style={styles.container}
    >

      <Image
        style={styles.img}
        source={require('@/assets/images/react-logo.png')}

      />

      <Text style={styles.title} > Home</Text>


      <Image
        style={styles.img}
        source={require('@/assets/images/react-logo.png')}

      />

    </View>

  );


}
export default Header;
