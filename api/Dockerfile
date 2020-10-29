FROM python:3.6

COPY . /app

WORKDIR /app

RUN pip install .

ENTRYPOINT ["python"]

EXPOSE 8000

CMD ["app.py"]
