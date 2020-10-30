import * as d3 from 'd3';

import React, { useEffect } from 'react';

import Neo4JD3 from 'neo4jd3';
import { mockResults } from 'data/mock';
import { sampleData } from 'data/sample';
import styles from './InteractiveGraph.module.scss';

let neo;

const InteractiveGraph: React.FC = (): JSX.Element => {
    useEffect(() => {
        neo = new Neo4JD3('#graph', {
            infoPanel: false,
            nodeRadius: 25,
            zoomFit: true,
            highlight: [
                {
                    class: 'Project',
                    property: 'name',
                    value: 'neo4jd3',
                },
                {
                    class: 'User',
                    property: 'userId',
                    value: 'eisman',
                },
            ],
            images: {
                Address: 'https://eisman.github.io/neo4jd3/img/twemoji/1f3e0.svg',
                BirthDate: 'https://eisman.github.io/neo4jd3/img/twemoji/1f5d3.svg',
                Cookie: 'https://eisman.github.io/neo4jd3/img/twemoji/1f36a.svg',
                CreditCard: 'https://eisman.github.io/neo4jd3/img/twemoji/1f4b3.svg',
                Device: 'https://eisman.github.io/neo4jd3/img/twemoji/1f4bb.svg',
                Email: 'https://eisman.github.io/neo4jd3/img/twemoji/2709.svg',
                Git: 'https://eisman.github.io/neo4jd3/img/twemoji/1f5c3.svg',
                Github: 'https://eisman.github.io/neo4jd3/img/twemoji/1f5c4.svg',
                icons: 'https://eisman.github.io/neo4jd3/img/twemoji/1f38f.svg',
                Ip: 'https://eisman.github.io/neo4jd3/img/twemoji/1f4cd.svg',
                Issues: 'https://eisman.github.io/neo4jd3/img/twemoji/1f4a9.svg',
                Language: 'https://eisman.github.io/neo4jd3/img/twemoji/1f1f1-1f1f7.svg',
                Options: 'https://eisman.github.io/neo4jd3/img/twemoji/2699.svg',
                Password: 'https://eisman.github.io/neo4jd3/img/twemoji/1f511.svg',
                'Project|name|d3': 'https://eisman.github.io/neo4jd3/img/twemoji/32-20e3.svg',
                'Project|name|neo4j': 'https://eisman.github.io/neo4jd3/img/twemoji/33-20e3.svg',
                'Project|name|neo4jd3': 'https://eisman.github.io/neo4jd3/img/twemoji/31-20e3.svg',
                User: 'https://eisman.github.io/neo4jd3/img/twemoji/1f600.svg',
            },
            neo4jData: sampleData,
            onNodeClick: function (e, node): void {
                console.log('Node', e, node);
                // window.open('/card/' + node['id'], '_blank');
            },
            minCollision: 75,
        });
    }, []);

    return (
        <div className={styles.InteractiveGraph}>
            <div id="graph" style={{ height: '100vh', width: '100%' }}></div>
        </div>
    );
};

export default InteractiveGraph;
