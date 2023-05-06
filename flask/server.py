import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression
# from sklearn.metrics import accuracy_score
from PIL import Image
from flask_cors import CORS, cross_origin
import tensorflow as tf
import cv2
import pickle

from flask import Flask, render_template,request

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/test',methods=["POST"])
def test():
    print(["a"])
    return "aaaa"


@app.route('/predict',methods=["POST"])
def predict():
    if request.method == "POST":
        data = request.get_json()
        f_model = open("./pcos_model.sav","rb")
        model = pickle.load(f_model)
        input_data = (data["Age"],data["Weight"],data["Height"],data["BMI"],data["Blood_Group"],data["Pulse_rate"],data["RR"],data["Hb"],data["Cycle"],data["Cycle_length"],data["Marriage_Status"],data["Pregnant"],data["No_of_abortions"],data["Hip"],data["Waist"],data["Waist_Hip_Ratio"],data["Weight_gain"],data["hair_growth"],data["Skin_darkening"],data["Hair_loss"],data["Pimples"],data["Fast_food"],data["Reg_Exercise"],data["BP_Systolic"],data["BP_Diastolic"])

        # change the input data to a numpy array
        input_data_as_numpy_array= np.asarray(input_data)

        # reshape the numpy array as we are predicting for only on instance
        input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

        prediction = model.predict(input_data_reshaped)
        print(prediction)

        if (prediction[0]== 0):
            print('The Person does not have a PCOS Disease')
            return "The Person does not have a PCOS Disease"
        else:
            print('The Person has PCOS Disease')
            return "The Person has PCOS Disease"

        
                
        # if pred >= 0.5:
        #     print("Breast Cancer: Yes")
        #     return render_template("detect.html", result="Breast Cancer is Detected", img_path="http://localhost:5000/"+fileName)
        # else:
        #     print("Breast Cancer: No")
        #     return render_template("detect.html", result="Breast Cancer is Not Detected", img_path="http://localhost:5000/"+fileName)

@app.route('/detection',methods=["POST"])
def detection():
    if request.method == "POST":
        print("POST REQUEST")
        histoImage = request.files["profilePicture"]
        fileName = "static/images/"+histoImage.filename
        histoImage.save(fileName)

        # start_prediction("images/"+histoImage.filename)
        model_path = "model.h5"
        loaded_model = tf.keras.models.load_model(model_path)
        image = cv2.imread(fileName)

        image_fromarray = Image.fromarray(image, 'RGB')
        resize_image = image_fromarray.resize((224, 224))
        expand_input = np.expand_dims(resize_image, axis=0)
        input_data = np.array(expand_input)
        input_data = input_data / 255

        pred = loaded_model.predict(input_data)
        if pred >= 0.5:
            print("Suffering from PCOS: Yes")
            return "Suffering from PCOS: Yes"
            # return render_template("detect.html", result="Breast Cancer is Detected", img_path="http://localhost:5000/"+fileName)
        else:
            print("Suffering from PCOS: No")
            return "Suffering from PCOS: No"

            # return render_template("detect.html", result="Breast Cancer is Not Detected", img_path="http://localhost:5000/"+fileName)




@app.route('/contact', methods=['POST'])
def contact():
    request.method = "POST"



if __name__ == "__main__":
    app.run(port=5000)