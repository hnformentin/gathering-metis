import os
from flask import Flask, render_template, jsonify
from datetime import datetime

app = Flask("metis-api")


@app.route("/")
def root():
    return jsonify(time=datetime.now().isoformat())

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
