import json
from methisapi.search import search_name

class Nodes():

    def __init__(self, structure):
        self._structure = structure

    def all_nodes(self):
        return []

    def get_by_ids(self, node_ids):
        return []

    def search(self, search_string):
        search_name(self.all_nodes(), search_name)


def load_nodes_from_file(path):
    with open(path) as fh:
        structure = json.load(fh)
    return Nodes(structure=structure)
