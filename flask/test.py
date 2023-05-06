import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression
# from sklearn.metrics import accuracy_score

import pickle
f_model = open("./pcos_model.sav","rb")
model = pickle.load(f_model)

input_data = (27.0,45.0,158.0,18.0,14.0,72.0,20.0,11.2,2.0,5.0,8.0,1.0,0.0,36.0,32.0,0.89,0.0,0.0,1.0,0.0,0.0,1.0,1.0,120.0,80.0)

# change the input data to a numpy array
input_data_as_numpy_array= np.asarray(input_data)

# reshape the numpy array as we are predicting for only on instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = model.predict(input_data_reshaped)
print(prediction)

if (prediction[0]== 0):
  print('The Person does not have a PCOS Disease')
else:
  print('The Person has PCOS Disease')