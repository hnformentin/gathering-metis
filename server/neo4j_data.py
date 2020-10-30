from collections import defaultdict


def search(neo4j_client, search_term):
    res = neo4j_client.search(search_term=search_term)

    matching_objects = []
    for r in res:
        node_type = list(r["any"].labels)[0].lower()
        matching_objects.append(
            {"id": r["any"].id, "name": r["any"]["name"], "type": node_type}
        )

    return {"results": matching_objects}


def node(neo4j_client, node_id):
    res = neo4j_client.node(node_id=node_id)

    neighbors = defaultdict(list)
    current_node = {}
    for r in res:
        neighbor_type = list(r["neighbor"].labels)[0].lower()
        neighbors[neighbor_type].append(
            {"id": r["neighbor"].id, "name": r["neighbor"]["name"]}
        )
    if res:
        node_type = list(r["node"].labels)[0].lower()
        current_node = {
            "id": r["node"].id,
            "name": r["node"]["name"],
            "type": node_type,
            "description": r["node"]["description"],
            "image": r["node"]["image"],
        }
    return {"current_node": current_node, "neighbors": dict(neighbors)}
