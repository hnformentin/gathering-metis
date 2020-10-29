from neo4j import GraphDatabase


def seed_neo4j():

    # hidden stuff
    uri = "bolt://localhost/7687"
    usr = "neo4j"
    psw = ""

    driver = GraphDatabase.driver(uri, auth=(usr, psw))
    # q = "MATCH (p:Person) RETURN p"
    clean_db = "MATCH (n) DETACH DELETE n"
    seed = """CREATE (d1:Department { name: "Department A"}),
                     (d2:Department { name: "Department B"}),
                     (d3:Department { name: "Department C"}),
                     (d4:Department { name: "Department D"}),
                     
                     (t1:Team { name: "Team 1"}),
                     (t2:Team { name: "Team 2"}),
                     (t3:Team { name: "Team 3"}),
                     (t4:Team { name: "Team 4"}),
                     (t5:Team { name: "Team 5"}),
                     (t6:Team { name: "Team 6"}),
                     
                     (p01:Person { name: "Person 1"}),
                     (p02:Person { name: "Person 2"}),
                     (p03:Person { name: "Person 3"}),
                     (p04:Person { name: "Person 4"}),
                     (p05:Person { name: "Person 5"}),
                     (p06:Person { name: "Person 6"}),
                     (p07:Person { name: "Person 7"}),
                     (p08:Person { name: "Person 8"}),
                     (p09:Person { name: "Person 9"}),
                     (p10:Person { name: "Person 10"}),
                     (p11:Person { name: "Person 11"}),
                     (p12:Person { name: "Person 12"}),
                     (p13:Person { name: "Person 13"}),
                     (p14:Person { name: "Person 14"}),
                     (p15:Person { name: "Person 15"}),
                     (p16:Person { name: "Person 16"}),
                     (p17:Person { name: "Person 17"}),
                     (p18:Person { name: "Person 18"}),
                     (p19:Person { name: "Person 19"}),
                     (p20:Person { name: "Person 20"}),
                     
                     (proj1:Project { name: "Project 1"}),
                     (proj2:Project { name: "Project 2"}),
                     (proj3:Project { name: "Project 3"}),
                     (proj4:Project { name: "Project 4"}),
                     (proj5:Project { name: "Project 5"}),
                     (proj6:Project { name: "Project 6"}),
                     (proj7:Project { name: "Project 7"}),
                     (proj8:Project { name: "Project 8"}),
                     
                     (t1)-[:assigned_to]->(proj1),
                     (t2)-[:assigned_to]->(proj2),
                     (t3)-[:assigned_to]->(proj3),
                     (t4)-[:assigned_to]->(proj4),
                     (t5)-[:assigned_to]->(proj5),
                     (t6)-[:assigned_to]->(proj6),
                     (t2)-[:assigned_to]->(proj7),
                     (t4)-[:assigned_to]->(proj8),
                                      
                     
                     (p01)-[:assigned_to]->(t1),
                     (p01)-[:member_of]->(d1),
                     
                     (p02)-[:assigned_to]->(t1),
                     (p02)-[:member_of]->(d1),
                     
                     (p03)-[:assigned_to]->(t1),
                     (p03)-[:member_of]->(d2),
                     
                     (p04)-[:assigned_to]->(t2),
                     (p04)-[:member_of]->(d2),
                     
                     (p05)-[:assigned_to]->(t2),
                     (p05)-[:member_of]->(d2),
                     
                     (p06)-[:assigned_to]->(t2),
                     (p06)-[:member_of]->(d2),
                     
                     (p07)-[:assigned_to]->(t3),
                     (p07)-[:member_of]->(d3),
                     
                     (p08)-[:assigned_to]->(t3),
                     (p08)-[:member_of]->(d3),
                     
                     (p09)-[:assigned_to]->(t3),
                     (p09)-[:member_of]->(d3),
                     
                     (p10)-[:assigned_to]->(t4),
                     (p10)-[:member_of]->(d4),
                     
                     (p11)-[:assigned_to]->(t1),
                     (p11)-[:member_of]->(d1),
                     
                     (p12)-[:assigned_to]->(t2),
                     (p12)-[:member_of]->(d2),
                     
                     (p13)-[:assigned_to]->(t3),
                     (p13)-[:member_of]->(d3),
                     
                     (p14)-[:assigned_to]->(t4),
                     (p14)-[:member_of]->(d4),
                     
                     (p15)-[:assigned_to]->(t1),
                     (p15)-[:member_of]->(d1),
                     
                     (p16)-[:assigned_to]->(t2),
                     (p16)-[:member_of]->(d2),
                     
                     (p17)-[:assigned_to]->(t3),
                     (p17)-[:member_of]->(d3),
                     
                     (p18)-[:assigned_to]->(t3),
                     (p18)-[:member_of]->(d3),
                     
                     (p19)-[:assigned_to]->(t4),
                     (p19)-[:member_of]->(d4),
                     
                     (p20)-[:assigned_to]->(t3),
                     (p20)-[:member_of]->(d4)
    
    """

    with driver.session() as session:

        # remove all nodes and relationships
        session.run(clean_db)

        # seed test data
        session.run(seed)


if __name__ == "__main__":
    seed_neo4j()
