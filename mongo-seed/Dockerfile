FROM    alpine
RUN     apk --no-cache add mongodb-tools
COPY pokemon.csv /tmp/pokemon.csv
CMD ["mongoimport","--host", "mongodb", "-d", "data","-c","Pokemon","--type", "csv", "--file", "/tmp/pokemon.csv", "--headerline"]
