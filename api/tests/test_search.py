from methisapi.search import search_name


def _create_candidates():
    return [
        {"name": "Person A", "type": "member", "id": "personA"},
        {"name": "Person B", "type": "member", "id": "personB"},
        {"name": "Department B", "type": "department", "id": "departmentB"},
    ]


def test_search_name_complete():
    candidates = _create_candidates()
    result = search_name("Person A", candidates)
    assert len(result) == 1
    assert result[0]["id"] == "personA"

    result = search_name("Person B", candidates)
    assert len(result) == 1
    assert result[0]["id"] == "personB"


def test_search_name_partial():
    candidates = _create_candidates()
    result = search_name("son", candidates)
    assert len(result) == 2
    assert set(r["id"] for r in result) == {"personA", "personB"}

def test_search_name_cross_type():
    candidates = _create_candidates()
    result = search_name("B", candidates)
    assert len(result) == 2
    assert set(r["id"] for r in result) == {"departmentB", "personB"}
