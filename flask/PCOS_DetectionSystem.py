# -*- coding: utf-8 -*-
"""
Created on Sun Feb 12 09:31:05 2023

@author: Chaitali
"""

# -*- coding: utf-8 -*-


import numpy as np
import pickle
import streamlit as st


# loading the saved model
loaded_model = pickle.load(open('C:/Users\Chaitali\Downloads\pcos_model.sav', 'rb'))


# creating a function for Prediction

def pcos_prediction(input_data):
    

    # changing the input_data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the array as we are predicting for one instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)

    if (prediction[0] == 0):
      return 'The person is not pcos affected'
    else:
      return 'The person is pcos affected'
  
    
  
def main():
    
    
    # giving a title
    st.title('Sakhi PCOS Prediction System')
    
    
    # getting the input data from the user
    
    























    
    




    
    Age = st.text_input('Age of the Patient')
    Weight = st.text_input('Weight')
    Height = st.text_input('Height')
    BMI = st.text_input('Body Mass Index')
    Blood_Group = st.text_input('Blood Group A-11, B-12, C-13, D-14, O-15')
    Pulse_rate =st.text_input('Pulse Rate')
    RR =st.text_input('Breaths per min')
    Hb =st.text_input('Haemoglobin range')
    Cycle =st.text_input('Cycle')
    Cycle_length =st.text_input('Menstrual Cycle Length')
    Marriage_Status =st.text_input('Marriage status')
    Pregnant =st.text_input('Preganant 0- no, 1- yes')
    No_of_abortions =st.text_input('No. of abortions')
    Hip =st.text_input('Hip(inch)')
    Waist =st.text_input('Waist(inch)')
    Waist_Hip_Ratio =st.text_input('Waist:Hip Ratio')
    Weight_gain =st.text_input('Weight gain 0- no, 1- yes')
    hair_growth =st.text_input('hair growth 0- no, 1- yes')
    Skin_darkening =st.text_input('Skin darkening 0- no, 1- yes')
    Hair_loss =st.text_input('Hair loss 0- no, 1- yes')
    Pimples =st.text_input('Pimples 0- no, 1- yes')
    Fast_food =st.text_input('Fast food 0- no, 1- yes')
    Reg_Exercise =st.text_input('Reg.Exercise 0- no, 1- yes')
    BP_Systolic =st.text_input('BP _Systolic 0- no, 1- yes')
    BP_Diastolic =st.text_input('BP _Diastolic 0- no, 1- yes')
    
    
    
    # code for Prediction
    diagnosis = ''
    
    # creating a button for Prediction
    
    if st.button('PCOS Test Result'):
        diagnosis = pcos_prediction([Age,Weight,Height,BMI,Blood_Group,Pulse_rate,
RR,Hb,Cycle,Cycle_length,Marriage_Status,Pregnant,No_of_abortions,Hip,Waist,Waist_Hip_Ratio,Weight_gain,hair_growth,Skin_darkening,Hair_loss,Pimples,Fast_food,Reg_Exercise,BP_Systolic,BP_Diastolic])
        
        
    st.success(diagnosis)
    
    
    
    
    
if __name__ == '__main__':
    main()