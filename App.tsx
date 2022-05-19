import { PixelRatio, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useScaling, { Scaling, MIN_HEIGHT, MIN_WIDTH } from './hooks/useScaling';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar/>
      <MainScreen/>
    </SafeAreaProvider>
  );
}

function MainScreen() {
  const scaling = useScaling();
  const { scaleW, scaleH, scale} = scaling;
  const styles = stylesForScaling(scaling);

  const insets = useSafeAreaInsets();

  return (
    
    <SafeAreaView style={[styles.mainColumn, {paddingTop: insets.top}]}>
      <StatusBar backgroundColor='#cfc' barStyle='dark-content'/>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <FontAwesome name="arrow-circle-left" size={scale(40)}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="arrow-circle-right" size={scale(40)}/>
        </TouchableOpacity>
        <Text style={{fontSize: scale(20), marginLeft: scaleW(30)}}>Title</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.statement}>
          <Text style={styles.equationText}>What is: </Text>
          <Text style={styles.equationBorderText}>1</Text>
          <Text style={styles.equationText}>+</Text>
          <Text style={styles.equationBorderText}>2</Text>
          <Text style={styles.equationText}>=</Text>
          <Text style={styles.equationBorderText}>?</Text>
        </View>

        <View style={styles.statementEqualSpacing}>
          <Text style={styles.equationText}>What is: </Text>
          <Text style={styles.equationBorderTextEqualSpacing}>1</Text>
          <Text style={styles.equationText}>+</Text>
          <Text style={styles.equationBorderTextEqualSpacing}>2</Text>
          <Text style={styles.equationText}>=</Text>
          <Text style={styles.equationBorderTextEqualSpacing}>?</Text>
        </View>

        <View style={[styles.input, {height: scaleH(150)}]}>
          <View style={styles.hintColumn}>
            <View style={styles.hintRow}>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
            </View>
            <View style={styles.hintRow}>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
            </View>
            <View style={styles.hintRow}>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
              <FontAwesome name="diamond" size={scale(20)}/>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text style={{fontSize: scale(10)}}>This is some small print</Text>
      </View>
    </SafeAreaView>
    
  );
}

const stylesForScaling = ({scaleW, scaleH, scale}: Scaling) => StyleSheet.create({
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT
  },

  topBar: {
    flexGrow: 0,
    flexBasis: 'auto',
    flexDirection: 'row',
    backgroundColor: '#cfc',
    justifyContent: 'flex-start',
    alignItems: 'center',
    heignt: scale(45)
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },

  bottomBar: {
    flexGrow: 0,
    flexBasis: 'auto',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  statement: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffe',
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleH(50),
  },

  equationBorderText: {
    fontSize: scale(25),
    borderWidth: scale(2),
    borderRadius: scale(10),
    paddingHorizontal: scaleW(6),
    paddingVertical: scaleH(6),
    marginHorizontal: scaleW(5),
    textAlign: 'center',
  },

  equationText: {
    fontSize: scale(15)
  },

  statementEqualSpacing: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffe',
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleH(50),
  },

  equationBorderTextEqualSpacing: {
    fontSize: scale(25),
    borderWidth: scale(2),
    borderRadius: scale(10),
    padding: scale(6),
    marginHorizontal: scale(5),
    textAlign: 'center',
  },

  input: {
    flex: 1,
    backgroundColor: '#eff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  hintColumn: {
    flexGrow: 0,
    flexBasis: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  hintRow: {
    flexGrow: 0,
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
