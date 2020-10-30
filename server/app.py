import os
from flask import Flask, jsonify, render_template
from collections import defaultdict

import neo4j_client
import neo4j_data

app = Flask("metis-gathering")


@app.route("/api/search/<search_term>")
def search(search_term):
    return neo4j_data.search(neo4j_client=neo4j_client, search_term=search_term)


@app.route("/api/node/<node_id>")
def node(node_id):
    return neo4j_data.node(neo4j_client=neo4j_client, node_id=node_id)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
