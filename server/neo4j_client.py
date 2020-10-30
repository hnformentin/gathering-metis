import os

from contextlib import contextmanager
from neo4j import GraphDatabase

_NEO_URI = os.environ.get("NEO4J_URI")
_NEO_USR = os.environ.get("NEO4J_AUTH", "/").split("/")[0]
_NEO_PWD = os.environ.get("NEO4J_AUTH", "/").split("/")[1]


def search(search_term):
    q = f"""MATCH (any) WHERE any.name CONTAINS '{search_term}' RETURN any"""
    with _neo4j_session() as session:
        return list(session.run(q))


def node(node_id):
    q = f"""MATCH (node)-[*1..1]-(neighbor) WHERE id(node) IN [{node_id}] RETURN node, neighbor;"""
    with _neo4j_session() as session:
        return list(session.run(q))


@contextmanager
def _neo4j_session():
    """Provide a transactional scope around a series of operations."""
    driver = GraphDatabase.driver(_NEO_URI, auth=(_NEO_USR, _NEO_PWD))
    with driver.session() as session:
        yield session
