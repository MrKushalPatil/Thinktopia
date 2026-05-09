from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/progress', methods=['POST'])
def save_progress():
    data = request.json
    print("Received progress:", data)
    # Save to database or file (mocked)
    return jsonify({"status": "success"})

@app.route('/api/mock-data')
def get_mock():
    with open('data/mock_dataset.json') as f:
        return jsonify(json.load(f))

if __name__ == '__main__':
    app.run(debug=True)