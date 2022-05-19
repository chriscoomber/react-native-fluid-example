import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useScaling, { Scaling, MIN_HEIGHT, MIN_WIDTH } from './hooks/useScaling';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsFillDiamondFill } from "react-icons/bs";

export default function App() {
  const scaling = useScaling();
  const { scaleW, scaleH, scale} = scaling;
  const styles = stylesForScaling(scaling);

  return (
    <View style={styles.mainColumn}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <BsFillArrowLeftSquareFill size={scale(40)}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <BsFillArrowRightSquareFill size={scale(40)}/>
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
          <View style={styles.hintRow}>
            <View style={styles.hintColumn}>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
            </View>
            <View style={styles.hintColumn}>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
            </View>
            <View style={styles.hintColumn}>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
              <BsFillDiamondFill size={scale(20)}/>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text style={{fontSize: scale(10)}}>This is some small print</Text>
      </View>
    </View>
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
    flexBasis: 'content',
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
    flexBasis: 'content',
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
    gap: scaleW(10)
  },

  equationBorderText: {
    fontSize: scale(25),
    borderWidth: scale(2),
    borderRadius: scale(10),
    paddingHorizontal: scaleW(6),
    paddingVertical: scaleH(6)
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
    gap: scale(10)
  },

  equationBorderTextEqualSpacing: {
    fontSize: scale(25),
    borderWidth: scale(2),
    borderRadius: scale(10),
    padding: scale(6),
  },

  input: {
    flex: 1,
    backgroundColor: '#eff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  hintColumn: {
    flexGrow: 0,
    flexBasis: 'content',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  hintRow: {
    flexGrow: 0,
    flexBasis: 'content',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
