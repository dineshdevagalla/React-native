/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import {
  Text,
  View,
  Picker,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import {fromHsv} from 'react-native-color-picker';
import {TextInputWithErrorText} from '../../common/TextInputWithErrorMessage';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

@observer
class SignInPage extends React.Component {
  @observable selectedColor1: string = '#03a9f4';
  @observable selectedColor2: string = '#9575cd';
  @observable selectedBranch: string = 'EEE';
  @observable selectedDate: string = '';
  radio_props = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'others', value: 1},
  ];
  onColorChange1 = (color: any) => {
    this.selectedColor1 = fromHsv(color);
  };
  onColorChange2 = (color: any) => {
    this.selectedColor2 = fromHsv(color);
  };
  onChangeFirstName = (value: any) => {};
  onChangeLastName = (value: any) => {};
  onChangeEmail = (value: any) => {};
  onChangePassword = (value: any) => {};
  onChangeConfirmPassword = (value: any) => {};
  onChangeMobileNUmber = (value: any) => {};
  onGenderSelect = (value: any) => {};
  onChangeSelectBranch = (value: any) => {};
  onChangeSelectedDate = (value: any) => {};
  render() {
    return (
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 1}}
        colors={[this.selectedColor1, this.selectedColor2]}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.favouriteColorsBlock}>
            <Text>Select your favourite Color </Text>
            <View style={styles.colorsPicker}>
              <ColorPicker
                defaultColor={this.selectedColor1}
                onColorChange={this.onColorChange1}
                hideSliders={true}
                style={styles.colorPickersStylesProps}
              />
              <ColorPicker
                defaultColor={this.selectedColor2}
                onColorChange={this.onColorChange2}
                hideSliders={true}
                style={styles.colorPickersStylesProps}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.subContainer}>
              <Text style={styles.sectionTitle}>SIGN UP</Text>
              <Text> please fill the below form Details</Text>

              <View style={styles.firstAndLastName}>
                <TextInputWithErrorText
                  placeholder="firstName"
                  keyboardType="default"
                  onChangeText={this.onChangeFirstName}
                  width="47%"
                />
                <TextInputWithErrorText
                  placeholder="lastName"
                  keyboardType="default"
                  onChangeText={this.onChangeLastName}
                  width="47%"
                />
              </View>
              <TextInputWithErrorText
                placeholder="email"
                keyboardType="email-address"
                onChangeText={this.onChangeEmail}
                width="98%"
              />
              <TextInputWithErrorText
                placeholder="mobile Number"
                keyboardType="numeric"
                onChangeText={this.onChangeMobileNUmber}
                width="98%"
                secureType={true}
              />
              <TextInputWithErrorText
                placeholder="password"
                keyboardType="default"
                onChangeText={this.onChangePassword}
                width="98%"
                secureType={true}
              />
              <TextInputWithErrorText
                placeholder="confirm password"
                keyboardType="default"
                onChangeText={this.onChangeConfirmPassword}
                width="98%"
                secureType={true}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Text style={{width: '35%'}}>Select Your gender :</Text>
                <View>
                  <RadioForm
                    radio_props={this.radio_props}
                    initial={-1}
                    formHorizontal={true}
                    onPress={this.onGenderSelect}
                    buttonSize={10}
                    style={{margin: 1}}
                    buttonColor="grey"
                  />
                </View>
              </View>

              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Text style={{width: '55%'}}>Selecte your Branch :</Text>
                <Picker
                  selectedValue={this.selectedBranch}
                  style={{height: 50, width: '50%'}}
                  onValueChange={this.onChangeSelectBranch}>
                  <Picker.Item label="EEE" value="EEE" />
                  <Picker.Item label="ECE" value="ECE" />
                  <Picker.Item label="MEC" value="MEC" />
                  <Picker.Item label="CIVIL" value="CIVIL" />
                  <Picker.Item label="CSE" value="CSE" />
                </Picker>
              </View>
              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Text style={{width: '55%'}}>Date Of Birth :</Text>

                <DatePicker
                  style={{width: '50%'}}
                  date={this.selectedDate}
                  mode="date"
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  minDate="01-01-1997"
                  maxDate="01-01-2050"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={this.onChangeSelectedDate}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

export {SignInPage};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
  },
  colorPickersStylesProps: {
    width: 50,
    height: 50,
    margin: 2,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  favouriteColorsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  colorsPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    width: '95%',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  firstAndLastName: {
    flexDirection: 'row',
    width: '96%',
    justifyContent: 'space-between',
  },
});
