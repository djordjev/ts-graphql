FROM postgres

WORKDIR /docker-entrypoint-initdb.d

ADD init_db.sql /docker-entrypoint-initdb.d

EXPOSE 5432
