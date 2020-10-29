import os
import tempfile

import pytest

import methisapi


@pytest.fixture
def client():

    with methisapi.app.test_client() as client:
        with flaskr.app.app_context():
            flaskr.init_db()
        yield client

    os.close(db_fd)
    os.unlink(flaskr.app.config['DATABASE'])