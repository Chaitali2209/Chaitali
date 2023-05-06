# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import numpy as np
import pickle

#loading the saved model
loaded_model = pickle.load(open('C:/Users\Chaitali\Downloads\pcos_model.sav', 'rb'))

input_data = (25, 64, 156, 26.3, 11, 70, 18, 11.2, 2, 6, 6,0, 0, 39, 34, 0.87, 0, 0, 0, 0, 0, 0, 0, 110, 80 )

# change the input data to a numpy array
input_data_as_numpy_array= np.asarray(input_data)

# reshape the numpy array as we are predicting for only on instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = loaded_model.predict(input_data_reshaped)
print(prediction)

if (prediction[0]== 0):
  print('The Person does not have a PCOS Disease')
else:
  print('The Person has PCOS Disease')