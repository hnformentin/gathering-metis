import re

def search_name(search_string, candidates):
    return list(filter(lambda c: search_string in c["name"], candidates))


