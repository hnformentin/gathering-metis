import io

from setuptools import find_packages
from setuptools import setup

with io.open("README.rst", "rt", encoding="utf8") as f:
    readme = f.read()

setup(
    name="methisapi",
    version="0.0.1",
    url="http://flask.pocoo.org/docs/tutorial/",
    license="MIT",
    description="API for the methis app",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=["flask"],
    extras_require={"test": ["pytest", "coverage"]},
)