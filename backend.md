# Backend

## What
This application consists of both a client and a server, located in respectively 
`server` and `client`.

The `server` is hosting a flask api on top of a neo4j database. The purpose of 
the server is to provide simple endpoints on top of the neo4j database - hiding 
the complexity regarding queries and structuring of the resulting data. The `server` 
should return the data as json. 

Inside the `server` we have 
- `app` which is the flask endpoints
- `neo4j_data` which does all the aggregation and manipulation of the results from neo4j
queries
- `neo4j_client` which should contain all the queries along with the neo4j session 
handler returning neo4j result objects.

## Technologies
- Python
- Docker
- Neo4j
