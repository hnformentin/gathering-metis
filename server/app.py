import os
from flask import Flask, jsonify, render_template
from neo4j import GraphDatabase
from collections import defaultdict

app = Flask("metis-gathering")

_NEO_URI = os.environ.get("NEO4J_URI")
_NEO_USR = os.environ.get("NEO4J_AUTH", "/").split("/")[0]
_NEO_PWD = os.environ.get("NEO4J_AUTH", "/").split("/")[1]


@app.route("/api/search/<search_term>")
def search(search_term):
    driver = GraphDatabase.driver(_NEO_URI, auth=(_NEO_USR, _NEO_PWD))
    q = f"""MATCH (any) WHERE any.name CONTAINS '{search_term}' RETURN any"""

    matching_objects = []
    with driver.session() as session:
        res = session.run(q)
        for r in res:
            node_type = list(r["any"].labels)[0].lower()
            matching_objects.append({"id": r["any"].id, "name": r["any"]["name"], "type": node_type})

    return {"results": matching_objects}


@app.route("/api/node/<node_id>")
def node(node_id):
    driver = GraphDatabase.driver(_NEO_URI, auth=(_NEO_USR, _NEO_PWD))

    q = f"""MATCH (node)-[*1..1]-(neighbor) WHERE id(node) IN [{node_id}] RETURN node, neighbor;"""

    neighbors = defaultdict(list)
    current_node = {}
    with driver.session() as session:
        res = list(session.run(q))
        for r in res:
            neighbor_type = list(r["neighbor"].labels)[0].lower()
            neighbors[neighbor_type].append(
                {"id": r["neighbor"].id, "name": r["neighbor"]["name"]}
            )
        if res:
            node_type = list(r["node"].labels)[0].lower()
            current_node = {"id": r["node"].id, "name": r["node"]["name"], "type": node_type, "description": r["node"]["description"], "image": r["node"]["image"]}
    return {"current_node": current_node, "neighbors": dict(neighbors)}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
