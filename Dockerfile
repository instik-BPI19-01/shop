FROM python:3.8

RUN apt-get update && apt-get install libgdal-dev postgis -y && apt-get autoremove -y && apt-get clean

RUN mkdir /server
WORKDIR /server

COPY ./requirements.txt /server/
RUN pip install -r /server/requirements.txt
COPY ./config /server/config
COPY ./modules /server/modules
COPY ./manage.py /server/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
