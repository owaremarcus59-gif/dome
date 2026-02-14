from flask import Flask 

#setting up app -> flask
app = Flask(__name__)

# this is our / route /place 
@app.route('/')
def index():
    return "this is openlabs"


if __name__ == "__main__":
    app(debug=True)
