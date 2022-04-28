FROM python:3.8

RUN apt-get update
RUN apt-get install libgdal-dev -y
RUN apt-get autoremove -y 
RUN apt-get clean

RUN mkdir /server
WORKDIR /server

COPY ./requirements.txt /server/
RUN pip install -r /server/requirements.txt
COPY ./config /server/config
COPY ./modules /server/modules
COPY ./manage.py /server/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
