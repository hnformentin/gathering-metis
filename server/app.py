import os
from flask import Flask, jsonify, render_template

app = Flask("name-gathering")


@app.route("/api/todos")
def getTodos():
    return {
        "todos": [
            {"description": "my first todo"},
            {"description": "my second todo"},
        ]
    }


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
